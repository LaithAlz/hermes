import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api"; // Add this line

function SendMessage({ conversationId, senderId }) {
  const [message, setMessage] = useState("");
  const sendMessage = useMutation(api.messages.sendMessage);

  const handleSendMessage = async () => {
    await sendMessage({ conversationId, senderId, text: message });
    setMessage("");
  };

  return (
    <div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSendMessage}>Send Message</button>
    </div>
  );
}

export default SendMessage;
