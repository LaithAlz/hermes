import React from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const ConversationList = ({ onSelectConversation }) => {
  // Fetch all conversations using the `getAllConversations` query
  const conversations = useQuery(api.myFunctions.getAllConversations);

  if (!conversations) {
    return <p>Loading conversations...</p>;
  }

  if (conversations.length === 0) {
    return <p>No conversations found.</p>;
  }

  return (
    <div className="conversation-list">
      <h2>Conversations</h2>
      <ul>
        {conversations.map((conversation) => (
          <li key={conversation._id} onClick={() => onSelectConversation(conversation._id)}>
            Conversation with: {conversation.participants.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationList;
