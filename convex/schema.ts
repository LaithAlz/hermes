export const schema = {
  users: {
    userId: "string",
    email: "string",
    createdAt: "number",
  },
  conversations: {
    participants: "string[]",
    createdAt: "number",
  },
  messages: {
    conversationId: "string",
    senderId: "string",
    text: "string",
    sentAt: "number",
  },
};
