import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Firebase/context";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

import "./Home.css"; // Custom CSS file

function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser]);

  const today = new Date().toLocaleDateString();

  // Fetch conversations from Convex API
  const conversations = useQuery(api.myFunctions.getAllConversations);

  const handleConversationClick = (conversationId) => {
    navigate(`/conversation/${conversationId}`);
  };

  if (conversations === undefined) {
    // While the conversations are loading or if there's an error
    return (
      <div className="loading-state">
        <p>Loading conversations...</p>
      </div>
    );
  }

  return (
    <>
      <header className="app-header">
        <div className="new-chat-button" onClick={() => navigate("/newchat")}>
          <span>New Chat</span>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>

        <div className="header-date">{today}</div>
      </header>

      <div className="main-content">
        <h1>Welcome, Ben</h1>

        <h2>Recent conversations</h2>

        {conversations.length === 0 ? (
          <p>No conversations available</p>
        ) : (
          <div className="conversations-grid">
            {conversations.map((conversation, index) => (
              <button
                key={index}
                className="conversation-card"
                onClick={() => handleConversationClick(conversation._id)}
              >
                <h3>{conversation.name || 'Unnamed Conversation'}</h3>
                <span
                  className={`language-badge ${conversation.language?.toLowerCase() || 'unknown'}`}
                >
                  {conversation.language || 'Unknown Language'}
                </span>
                <p className="conversation-date">{conversation.createdAt ? new Date(conversation.createdAt).toLocaleDateString() : 'Unknown Date'}</p>
                <div className="tags">
                  {conversation.tags && conversation.tags.length > 0 ? (
                    conversation.tags.map((tag, i) => (
                      <span className="tag" key={i}>
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="tag">No tags</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}

        <button className="view-more-button">View more...</button>
      </div>
    </>
  );
}

export default Home;
