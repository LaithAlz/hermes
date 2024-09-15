import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Firebase/context";

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

  const conversations = [
    {
      _id: "1",
      name: "Business Discussion",
      language: "English",
      createdAt: "2023-09-10T10:30:00Z",
      tags: ["business", "meeting"],
    },
    {
      _id: "2",
      name: "Family Chat",
      language: "Arabic",
      createdAt: "2023-09-12T15:00:00Z",
      tags: ["family", "personal"],
    },
    {
      _id: "3",
      name: "Project Collaboration",
      language: "French",
      createdAt: "2023-09-14T12:45:00Z",
      tags: ["work", "project"],
    },
    {
      _id: "4",
      name: "Study Group",
      language: "Spanish",
      createdAt: "2023-09-13T18:20:00Z",
      tags: ["education", "study"],
    },
    {
      _id: "5",
      name: "Travel Plans",
      language: "Chinese",
      createdAt: "2023-09-09T09:15:00Z",
      tags: ["travel", "plans"],
    },
  ];

  const handleConversationClick = (conversationId) => {
    navigate(`/conversation/${conversationId}`);
  };

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
                <h3>{conversation.name}</h3>
                <span
                  className={`language-badge ${conversation.language?.toLowerCase() || "unknown"}`}
                >
                  {conversation.language || "Unknown"}
                </span>
                <p className="conversation-date">
                  {new Date(conversation.createdAt).toLocaleDateString()}
                </p>
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
