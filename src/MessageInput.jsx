import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

const MessageInput = ({ conversationId, senderId }) => {
  const [messageBody, setMessageBody] = useState("");
  const sendMessage = useMutation(api.myFunctions.sendMessage);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (messageBody.trim() !== "") {
      try {
        await sendMessage({
          conversationId,
          senderId,  
          body: messageBody,
        });
        setMessageBody("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSendMessage}>
      <input
        type="text"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
