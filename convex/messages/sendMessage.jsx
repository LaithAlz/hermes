import { mutation } from "../_generated/server"; 

export default mutation(async ({ db }, { conversationId, senderId, text }) => {
  await db.insert("messages", {
    conversationId,
    senderId,
    text,
    sentAt: Date.now(),
  });
  return { success: true };
});
