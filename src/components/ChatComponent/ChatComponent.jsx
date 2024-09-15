import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useChat } from "./ChatContext";
import { useAuth } from "../Firebase/context";
import { doSignOut } from "../Firebase/firebase";
import { useNavigate } from 'react-router-dom';

const apiKey = "AIzaSyA-GV750Rpm2H9iEJylsAES5IeWP5aBlP0";

const ChatBox = () => {

  const [input, setInput] = useState("");
  const [user1AudioUrl, setUser1AudioUrl] = useState(null);
  const [user2AudioUrl, setUser2AudioUrl] = useState(null);
  const [currentSpeaker, setCurrentSpeaker] = useState(null);

  const recognitionRef1 = useRef(null);
  const recognitionRef2 = useRef(null);

  const setupSpeechRecognition = (lang, setInput) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    recognition.lang = lang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const lastResult = event.results[event.results.length - 1];
      if (lastResult.isFinal) {
        setInput(lastResult[0].transcript);
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    return recognition;
  };

  if (!recognitionRef1.current) {
    recognitionRef1.current = setupSpeechRecognition("en-US", setInput);
  }

  if (!recognitionRef2.current) {
    recognitionRef2.current = setupSpeechRecognition("fr-CA", setInput);
  }

  const startListeningUser1 = () => {
    recognitionRef1.current?.start();
    setCurrentSpeaker(1);
  };

  const startListeningUser2 = () => {
    recognitionRef2.current?.start();
    setCurrentSpeaker(2);
  };

  const { conversation, addMessage } = useChat();

  const handleSubmit = async () => {
    if (input.trim() === "") return;
    if (currentSpeaker === null) return;
    
    const targetLanguage = currentSpeaker === 1 ? "fr" : "en";
    const translatedText = await translateText(input, targetLanguage);
    const audioUrl = await generateAudio(translatedText, targetLanguage);

    const newMessage = {
      user: `User ${currentSpeaker}`,
      originalText: input,
      translatedText,
      audioUrl,
    };

    addMessage(newMessage);

    console.log(audioUrl)
    const audio = new Audio(audioUrl);
    if (currentSpeaker === 1) {
      setUser1AudioUrl(audio);
    } else {
      setUser2AudioUrl(audio);
    }

    setInput("");
  };

  const translateText = async (text, targetLanguage) => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
      q: text,
      target: targetLanguage,
    };
    try {
      const response = await axios.post(url, data);
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  const generateAudio = async (text, languageCode) => {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
    const ttsLanguageCode = `${languageCode}-${languageCode.toUpperCase()}`;
    const ttsVoice = languageCode === "fr" ? "fr-FR-Wavenet-A" : "en-US-Wavenet-A";

    const requestData = {
      input: { text },
      voice: {
        languageCode: ttsLanguageCode,
        name: ttsVoice,
      },
      audioConfig: {
        audioEncoding: "MP3",
      },
    };

    try {
      const response = await axios.post(url, requestData);
      const audioContent = response.data.audioContent;

      const audioBlob = new Blob([new Uint8Array(atob(audioContent).split("").map((c) => c.charCodeAt(0)))], {
        type: "audio/mp3",
      });
      return URL.createObjectURL(audioBlob);
    } catch (error) {
      console.error("Error generating audio:", error);
    }
  };

  const playAudio = (audio) => {
    if (audio) {
      audio.play();
    }
  };

  const navigate = useNavigate();
  const { currentUser } = useAuth()
  useEffect(() => {
    if (!currentUser) {
        navigate("/signin");
    }
  }, [currentUser]);

  return (
    <div>
      <button onClick={doSignOut}>Sign out</button>
      <h2>Chat Box</h2>
      <div>
      <button onClick={startListeningUser1}>Speak in English</button>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here/speak to populate"
        />
        <button onClick={startListeningUser2}>Speak in French</button>

        <button onClick={handleSubmit}>Send</button>

      </div>

      <div>
        <h3>Conversation:</h3>
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <strong>{msg.user}:</strong>
            <p>Original: {msg.originalText}</p>
            <p>Translated: {msg.translatedText}</p>
            <button onClick={() => playAudio(currentSpeaker === 1 ? user1AudioUrl : currentSpeaker === 2 ? user2AudioUrl : null)}>Play</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
