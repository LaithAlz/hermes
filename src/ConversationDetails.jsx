import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const ConversationDetails = ({ conversationId, goBack }) => {
  // Fetch the conversation using the `getConversation` query
  const conversation = useQuery(api.myFunctions.getConversation, { conversationId });

  if (!conversation) {
    return <p>Loading conversation details...</p>;
  }

  return (
    <div className="conversation-details">
      <h2>Conversation Details</h2>
      <p>Participants: {conversation.participants.join(", ")}</p>
      {/* Add more details about the conversation if available */}
      <button onClick={goBack}>Back to Conversations</button>
    </div>
  );
};

export default ConversationDetails;
