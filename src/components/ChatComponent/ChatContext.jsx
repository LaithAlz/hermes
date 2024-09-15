import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const [conversation, setConversation] = useState([]);

  const addMessage = (message) => {
    setConversation((prevConversation) => [...prevConversation, message]);
  };

  return (
    <ChatContext.Provider value={{ conversation, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
