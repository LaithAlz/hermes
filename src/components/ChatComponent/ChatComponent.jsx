import { useState, useRef, useEffect } from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useChat } from "./ChatContext";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import "./ChatBox.css"; // Import the CSS file
import ConversationSummary from "../PostChat/ConversationSummary";
import CohereSummary from "../Summary/CohereSummary";
import { useAuth } from "../Firebase/context";
import { doSignOut } from "../Firebase/firebase";
import { useNavigate } from 'react-router-dom';

const apiKey = "AIzaSyA-GV750Rpm2H9iEJylsAES5IeWP5aBlP0";

const ChatBox = () => {
  const [input, setInput] = useState("");
  const [currentSpeaker, setCurrentSpeaker] = useState(null);
  const [userAudioUrl, setUserAudioUrl] = useState(null);

  const recognitionRef1 = useRef(null);
  const recognitionRef2 = useRef(null);
  const audioRef = useRef(null);

  const { conversation, addMessage, setConversation } = useChat();

  const storeMessage = useMutation(api.myFunctions.storeMessage);
  const getMessages = useQuery(api.myFunctions.getMessages, {
    conversationId: "j9703qvhw44rmfh88knmh17kp570t1dn",
  });

  const conversationId = "j9703qvhw44rmfh88knmh17kp570t1dn";
  const senderIdUser1 = "jd75rdv8e9s340ktem1jydn1j570vp4r";
  const senderIdUser2 = "jd781h00mrb7wz724k2xza4h8d70tq35";

  useEffect(() => {
    if (getMessages) {
      setConversation(getMessages); // Load the conversation from the database
    }
  }, [getMessages, setConversation]);

  const setupSpeechRecognition = (lang, setInput) => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
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

  const handleSubmit = async () => {
    if (input.trim() === "") return;
    if (currentSpeaker === null) return;

    const targetLanguage = currentSpeaker === 1 ? "fr" : "en";
    const translatedText = await translateText(input, targetLanguage);

    let textInEnglish;
    let language = "en";

    if (targetLanguage == "en") {
      //HARD CODING ENGLISH LANGUAGE TO DB
      textInEnglish = translatedText;
      language = "fr";
    } else {
      textInEnglish = input;
      language = "en";
    }

    const audioUrl = await generateAudio(translatedText, targetLanguage);
    if (!audioUrl) {
      console.error("Audio URL is missing");
      return;
    }

    const newMessage = {
      user: `User ${currentSpeaker}`,
      originalText: input,
      translatedText,
      audioUrl,
      textInEnglish,
      language,
    };

    addMessage(newMessage);

    const senderId = currentSpeaker === 1 ? senderIdUser1 : senderIdUser2;

    await storeMessage({
      conversationId,
      senderId,
      body: input,
      translatedText,
      audioUrl,
      textInEnglish,
      language,
    });

    setUserAudioUrl(audioUrl);
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
    const ttsVoice =
      languageCode === "fr" ? "fr-FR-Wavenet-A" : "en-US-Wavenet-A";

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

      const audioBlob = new Blob(
        [
          new Uint8Array(
            atob(audioContent)
              .split("")
              .map((c) => c.charCodeAt(0))
          ),
        ],
        {
          type: "audio/mp3",
        }
      );
      return URL.createObjectURL(audioBlob);
    } catch (error) {
      console.error("Error generating audio:", error);
    }
  };

  useEffect(() => {
    if (userAudioUrl && audioRef.current) {
      audioRef.current.src = userAudioUrl;
      audioRef.current.play();
    }
  }, [userAudioUrl]);

  return (
    <div className="chat-box-container">
    <div>
      <button onClick={doSignOut}>Sign out</button>
      <h2>Chat Box</h2>

      <div className="input-container">
        <button className="button" onClick={startListeningUser1}>
          Speak in English
        </button>
        <textarea
          className="textarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here or speak..."
        />
        <button className="button" onClick={startListeningUser2}>
          Speak in French
        </button>
        <button className="button send" onClick={handleSubmit}>
          Send
        </button>
      </div>

      <div className="conversation-container">
        <h3>Conversation</h3>
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <strong>{msg.user}:</strong>
            <p>Original: {msg.body}</p>
            <p>Translated: {msg.translatedText}</p>
            <button
              className="button play"
              onClick={() => setUserAudioUrl(msg.audioUrl)}
            >
              Play
            </button>
          </div>
        ))}
      </div>

      <audio ref={audioRef} hidden />

      <CohereSummary conversationId={conversationId} />
    </div>
  );
};

export default ChatBox;
