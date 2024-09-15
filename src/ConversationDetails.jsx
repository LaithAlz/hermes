import React from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const ConversationDetails = ({ conversationId, goBack }) => {
  // Fetch the conversation using the `getConversation` query
  const conversation = useQuery(api.myFunctions.getConversation, { conversationId });

  if (!conversation) {
    return <p>Loading conversation details...</p>;
  }

  // For now, we'll assume the sender is hardcoded as "user1" (replace with dynamic user data later)
  const senderId = "user1"; 

  return (
    <div className="conversation-details">
      <h2>Conversation Details</h2>
      <p>Participants: {conversation.participants.join(", ")}</p>

      {/* Message List */}
      <MessageList conversationId={conversationId} />

      {/* Message Input */}
      <MessageInput conversationId={conversationId} senderId={senderId} />

      <button onClick={goBack}>Back to Conversations</button>
    </div>
  );
};

export default ConversationDetails;
