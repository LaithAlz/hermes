import { useState } from "react";
import axios from "axios";
import { useChat } from "./ChatContext";

const apiKey = "AIzaSyA-GV750Rpm2H9iEJylsAES5IeWP5aBlP0";

const ChatBox = () => {
  const [user1Input, setUser1Input] = useState("");
  const [user2Input, setUser2Input] = useState("");
  const [user1AudioUrl, setUser1AudioUrl] = useState(null);
  const [user2AudioUrl, setUser2AudioUrl] = useState(null);

  const { conversation, addMessage } = useChat();

  const handleUser1Submit = async () => {
    if (user1Input.trim() === "") return;

    const translatedText = await translateText(user1Input, "ar");
    const audioUrl = await generateAudio(translatedText, "ar");

    addMessage({
      user: "User 1",
      originalText: user1Input,
      translatedText,
      audioUrl,
    });

    setUser1Input("");
    setUser1AudioUrl(audioUrl);
  };

  const handleUser2Submit = async () => {
    if (user2Input.trim() === "") return;

    const translatedText = await translateText(user2Input, "en");
    const audioUrl = await generateAudio(translatedText, "en");

    addMessage({
      user: "User 2",
      originalText: user2Input,
      translatedText,
      audioUrl,
    });

    setUser2Input("");
    setUser2AudioUrl(audioUrl);
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
    const ttsVoice = languageCode === "ar" ? "ar-XA-Wavenet-A" : "en-US-Wavenet-A";

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

  return (
    <div>
      <h2>Chat Box</h2>

      <div>
        <h3>User 1 (English):</h3>
        <textarea
          value={user1Input}
          onChange={(e) => setUser1Input(e.target.value)}
          placeholder="Type in English..."
        />
        <button onClick={handleUser1Submit}>Send</button>

        {user1AudioUrl && (
          <audio controls>
            <source src={user1AudioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      <div>
        <h3>User 2 (Arabic):</h3>
        <textarea
          value={user2Input}
          onChange={(e) => setUser2Input(e.target.value)}
          placeholder="Type in Arabic..."
        />
        <button onClick={handleUser2Submit}>Send</button>

        {user2AudioUrl && (
          <audio controls>
            <source src={user2AudioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>

      <div>
        <h3>Conversation:</h3>
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            <strong>{msg.user}:</strong>
            <p>Original: {msg.originalText}</p>
            <p>Translated: {msg.translatedText}</p>
            <audio controls>
              <source src={msg.audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBox;
