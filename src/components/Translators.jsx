import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import axios from "axios";
import { api } from "../../convex/_generated/api";
import { useAuth } from "./Firebase/context";
import { doSignOut } from "./Firebase/firebase";
import { useNavigate } from "react-router-dom";
import ChatBox from "../ChatBox.jsx";

function Translators() {
  // const [user1Text, setUser1Text] = useState("");  // Transcription for user 1
  // const [user2Text, setUser2Text] = useState("");  // Transcription for user 2
  // const [translatedUser1, setTranslatedUser1] = useState("");
  // const [translatedUser2, setTranslatedUser2] = useState("");
  // const [isRecording, setIsRecording] = useState(false);
  // const [mediaRecorder, setMediaRecorder] = useState(null);

  // const apiKey = "AIzaSyA-GV750Rpm2H9iEJylsAES5IeWP5aBlP0";

  // const addConversation = useMutation(api.myFunctions.addConversation);

  // const { currentUser } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!currentUser) {
  //     navigate("/signup");
  //   }
  // }, [currentUser]);

  // // Handles translation using Google Translate API
  // const translateText = async (text, targetLanguage, setTranslation) => {
  //   const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  //   const data = {
  //     q: text,
  //     target: targetLanguage,
  //   };
  //   try {
  //     const response = await axios.post(url, data);
  //     const translatedText = response.data.data.translations[0].translatedText;
  //     setTranslation(translatedText);
  //   } catch (error) {
  //     console.error("Translation Error:", error);
  //   }
  // };

  // // Handle audio recording using MediaRecorder
  // const startRecording = () => {
  //   navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
  //     const recorder = new MediaRecorder(stream);
  //     const audioChunks = [];

  //     recorder.ondataavailable = (event) => {
  //       audioChunks.push(event.data);
  //     };

  //     recorder.onstop = async () => {
  //       const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
  //       await sendAudioToGoogleSpeechAPI(audioBlob);
  //     };

  //     recorder.start();
  //     setIsRecording(true);
  //     setMediaRecorder(recorder);
  //   }).catch(error => {
  //     console.error("Error accessing microphone:", error);
  //   });
  // };

  // const stopRecording = () => {
  //   if (mediaRecorder) {
  //     mediaRecorder.stop();
  //     setIsRecording(false);
  //   }
  // };

  // // Send audio to Google Speech-to-Text API for transcription and language detection
  // const sendAudioToGoogleSpeechAPI = async (audioBlob) => {
  //   const reader = new FileReader();
  //   reader.onload = async () => {
  //     const audioBytes = reader.result.split(',')[1];  // Base64-encoded audio
  //     const url = `https://speech.googleapis.com/v1/speech:recognize?key=${apiKey}`;

  //     const requestData = {
  //       config: {
  //         encoding: "LINEAR16",
  //         sampleRateHertz: 16000,
  //         languageCode: "en-US", // Can set default language but allow multi-language
  //         alternativeLanguageCodes: ["ar-EG", "en-US"],  // Allow Arabic and English
  //       },
  //       audio: {
  //         content: audioBytes,
  //       }
  //     };

  //     try {
  //       const response = await axios.post(url, requestData);
  //       const transcriptionResult = response.data.results[0].alternatives[0];

  //       const detectedLanguage = transcriptionResult.languageCode; // Language code
  //       const transcript = transcriptionResult.transcript;

  //       if (detectedLanguage === 'en-US') {
  //         setUser1Text(transcript);  // User 1 speaks English
  //         await translateText(transcript, "ar", setTranslatedUser1);  // Translate English to Arabic
  //       } else if (detectedLanguage.startsWith('ar')) {
  //         setUser2Text(transcript);  // User 2 speaks Arabic
  //         await translateText(transcript, "en", setTranslatedUser2);  // Translate Arabic to English
  //       }

  //     } catch (error) {
  //       console.error("Error with Google Speech-to-Text API:", error);
  //     }
  //   };
  //   reader.readAsDataURL(audioBlob);
  // };

  // const handleCreateConversation = async () => {
  //   // Store conversation data in Convex
  //   await addConversation({
  //     user1Text,
  //     translatedUser1,
  //     user2Text,
  //     translatedUser2,
  //   });
  // };

  return (
    <div>
      <ChatBox />

      {/* {!!currentUser && <div>Hello {currentUser.email}!</div>}
      <button onClick={doSignOut}>Sign out</button>
      <h1>Translator</h1>

      <div>
        <button onClick={isRecording ? stopRecording : startRecording}>
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      </div>

      <div style={styles.conversation}>
        <div style={styles.user1}>
          <h3>User 1 (English):</h3>
          <p>{user1Text}</p>
          <h4>Translation (Arabic):</h4>
          <p>{translatedUser1}</p>
        </div>
        <div style={styles.user2}>
          <h3>User 2 (Arabic):</h3>
          <p>{user2Text}</p>
          <h4>Translation (English):</h4>
          <p>{translatedUser2}</p>
        </div>
      </div>

      <button onClick={handleCreateConversation}>
        Save Conversation
      </button> */}
    </div>
  );
}

const styles = {
  conversation: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  user1: {
    width: "45%",
    padding: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  },
  user2: {
    width: "45%",
    padding: "10px",
    border: "1px solid #ddd",
    backgroundColor: "#f9f9f9",
  },
};

export default Translators;
