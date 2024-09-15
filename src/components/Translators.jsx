import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import axios from "axios";
import { api } from "../../convex/_generated/api";
import { useAuth } from "./Firebase/context";
import { doSignOut } from "./Firebase/firebase";
import {useNavigate} from 'react-router-dom';

function Translators() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [audioUrl, setAudioUrl] = useState(null);
  const [targetLanguage, setTargetLanguage] = useState("ar");

  const addConversation = useMutation(api.conversations.addConversation);

  const apiKey = "AIzaSyA-GV750Rpm2H9iEJylsAES5IeWP5aBlP0";

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTextTranslate = async () => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
      q: inputText,
      target: targetLanguage,
    };

    await axios
      .post(url, data)
      .then(async (response) => {
        const translatedText = response.data.data.translations[0].translatedText;
        setTranslatedText(translatedText);

        await handleTextToSpeech(translatedText);
      })
      .catch((error) => {
        console.error(
          "Error:",
          error.response ? error.response.data : error.message
        );
      });

    await addConversation({
      originalText: inputText,
      translatedText: translatedText,
      language: targetLanguage,
    });
  };

  const handleTextToSpeech = async (textToSpeak) => {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

    const ttsLanguageCode = `${targetLanguage}-${targetLanguage.toUpperCase()}`;
    const ttsVoice = targetLanguage === "ar" ? "ar-XA-Wavenet-A" : `${targetLanguage}-Wavenet-A`;

    const requestData = {
      input: {
        text: textToSpeak,
      },
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
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.error("Error converting text to speech:", error);
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
      {!!currentUser && <div>Hello {currentUser.email}!</div>}
      <button onClick={doSignOut}>Sign out</button>
      <h1>Translator</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text to translate..."
      />
      <button onClick={handleTextTranslate}>Translate Text</button>

      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}

      <div>
        {audioUrl && (
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
        )}
      </div>
    </div>
  );
}

export default Translators;
