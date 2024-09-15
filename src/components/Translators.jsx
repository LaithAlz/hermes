<<<<<<< HEAD:src/components/Translators.jsx
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
=======
import React, { useState } from "react";
import ConversationList from "./ConversationList";
import ConversationDetails from "./ConversationDetails";

const App = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(null);
>>>>>>> conversations-setup:src/App.jsx

  // Function to handle selecting a conversation
  const handleSelectConversation = (conversationId) => {
    setSelectedConversationId(conversationId);
  };

<<<<<<< HEAD:src/components/Translators.jsx
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
=======
  // If a conversation is selected, show the details; otherwise, show the list
  return (
    <div className="app">
      {!selectedConversationId ? (
        <ConversationList onSelectConversation={handleSelectConversation} />
      ) : (
        <ConversationDetails
          conversationId={selectedConversationId}
          goBack={() => setSelectedConversationId(null)} // Function to go back to the list
        />
>>>>>>> conversations-setup:src/App.jsx
      )}
    </div>
  );
};

export default Translators;
