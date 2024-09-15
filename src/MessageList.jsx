import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const MessageList = ({ conversationId }) => {
  const messages = useQuery(api.myFunctions.getMessages, { conversationId });

  if (!messages) {
    return <p>Loading messages...</p>;
  }

  if (messages.length === 0) {
    return <p>No messages yet.</p>;
  }

  return (
    <div className="message-list">
      {messages.map((message) => (
        <div key={message._id} className="message">
          <p><strong>{message.senderId}:</strong> {message.body}</p>
          <span>{new Date(message.sentAt).toLocaleTimeString()}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
