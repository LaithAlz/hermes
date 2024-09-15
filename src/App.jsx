import React, { useState } from "react";
import ConversationList from "./ConversationList";
import ConversationDetails from "./ConversationDetails";

const App = () => {
  const [selectedConversationId, setSelectedConversationId] = useState(null);

  // Function to handle selecting a conversation
  const handleSelectConversation = (conversationId) => {
    setSelectedConversationId(conversationId);
  };

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
      )}
    </div>
  );
};

export default App;
