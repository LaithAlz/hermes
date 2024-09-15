import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [conversation, setConversationState] = useState([]);

  const addMessage = (message) => {
    setConversationState((prevConversation) => [...prevConversation, message]);
  };

  const setConversation = (messages) => {
    setConversationState(messages);
  };

  return (
    <ChatContext.Provider value={{ conversation, addMessage, setConversation }}>
      {children}
    </ChatContext.Provider>
  );
};
