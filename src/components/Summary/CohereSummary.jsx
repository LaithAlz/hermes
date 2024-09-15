import { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const CohereSummary = ({ conversationId }) => {
  const [bulletSummary, setBulletSummary] = useState("");
  const [detailedSummary, setDetailedSummary] = useState("");

  const apiKey = "7KoKi6DUUw4by6PiTOc2kSXDivoO2yBiequLuHA8"; // Use your actual Cohere API key

  // Fetch messages using useQuery hook
  const messages = useQuery(api.myFunctions.getMessages, {
    conversationId,
  });

  useEffect(() => {
    const summarize = async () => {
      if (messages && messages.length > 0) {
        const formattedConversation = await formatConversation(messages);
        const bulletSummary = await summarizeConversationBullets(
          formattedConversation
        );
        const detailedSummary = await summarizeConversationDetails(
          formattedConversation
        );

        console.log("Bullet Summary:", bulletSummary); // Debugging: Check if bullet summary is set
        console.log("Detailed Summary:", detailedSummary); // Debugging: Check if detailed summary is set

        setBulletSummary(bulletSummary);
        setDetailedSummary(detailedSummary);
      }
    };
    summarize();
  }, [messages]);

const formatConversation = (messages) => {
  return messages.map((message) => {
    // Check if message.textInEnglish is defined
    let text = message.textInEnglish || "No message provided"; 
    
    // Ensure language is defined and fallback if necessary
    let language = message.language || "unknown";
    let role;

    // Determine the role based on the language
    if (language === "en") {
      role = "PERSON 1";
      text += " (said in English)";
    } else if (language === "fr") {
      role = "PERSON 2";
      text += " (said in French, translated to English)";
    } else {
      role = "UNKNOWN"; // Handle unknown or undefined language
      text += " (language unknown)";
    }

    console.log(`Language: ${language}, Role: ${role}, Message: ${text}`);

    return { role, message: text };
  });
};


  const summarizeConversationBullets = async (messages) => {
    const formattedConversation = messages
      .map((message) => message.message) // Extract only the message text
      .join("\n");

    console.log("Formatted Conversation:", formattedConversation);

    const url = "https://api.cohere.ai/generate";
    const data = {
      model: "command-xlarge-nightly",
      prompt: `This is a conversation between 2 people speaking different languages. Summarize the conversation into concise bullet points. Be specific to what is said.\n\nConversation:\n${formattedConversation}\n\nBullet Point Summary:`,
      max_tokens: 150,
      temperature: 0.3,
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Full API Response:", response.data.text);

      return response.data.text; // Return the summary
    } catch (error) {
      console.error("Error with Cohere API:", error);
      return null;
    }
  };

  const summarizeConversationDetails = async (messages) => {
    const formattedConversation = messages
      .map((message) => message.message) // Extract only the message text
      .join("\n");

    console.log("Formatted Conversation:", formattedConversation);

    const url = "https://api.cohere.ai/generate";
    const data = {
      model: "command-xlarge-nightly",
      prompt: `This is a conversation between 2 people speaking different languages. Summarize the conversation in detail. Be specific to what is said.\n\nConversation:\n${formattedConversation}\n\n Detailed Summary:`,
      max_tokens: 150,
      temperature: 0.3,
    };

    try {
      const response = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Full API Response:", response.data.text);

      return response.data.text; // Return the summary
    } catch (error) {
      console.error("Error with Cohere API:", error);
      return null;
    }
  };

  return (
    <div>
      <h1>Conversation Summary</h1>

      <div>
        <h3>Bullet Point Summary:</h3>
        <p>{bulletSummary ? bulletSummary : "Loading bullet points..."}</p>
      </div>

      <div>
        <h3>Detailed Summary:</h3>
        <p>{detailedSummary || "Loading detailed summary..."}</p>
      </div>
    </div>
  );
};

export default CohereSummary;
