import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { useMutation } from "convex/react"; // For calling Convex mutations
import { api } from "../../../convex/_generated/api"; // Import Convex API
import styles from "./NewChatComponent.module.css";
import { useAuth } from "../Firebase/context";

function NewChatComponent() {
  const languages = [
    { language: "Arabic", shortCode: "ar", longCode: "ar-SA" },
    { language: "French", shortCode: "fr", longCode: "fr-FR" },
    { language: "Spanish", shortCode: "es", longCode: "es-ES" },
    { language: "Chinese", shortCode: "zh", longCode: "zh-CN" },
    { language: "Russian", shortCode: "ru", longCode: "ru-RU" },
  ];

  const navigate = useNavigate(); // For navigation
  const createConversation = useMutation(api.myFunctions.createConversation); // Convex mutation to create conversation

  const firebaseAuth = useAuth();
  const userId = firebaseAuth.currentUser.uid;
  console.log("logged in user id", userId);

  const handleLanguageSelection = async (language) => {
    const participants = [userId, "user2"];

    // Call the createConversation mutation to create the conversation in Convex
    const { conversationId } = await createConversation({ participants });

    // Navigate to the ChatComponent with the conversationId and selected language
    navigate(`/conversation/${conversationId}`, {
      state: { language, conversationId },
    });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.Title}>
        Select a language you would like to communicate in
      </h1>
      <div className={styles.buttonList}>
        {languages.map((language) => (
          <button
            key={language.shortCode}
            onClick={() => handleLanguageSelection(language)}
          >
            Let's Talk in {language.language}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NewChatComponent;
