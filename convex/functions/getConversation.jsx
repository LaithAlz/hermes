import { query } from "../_generated/server";

export const getConversation = query(async ({ db }, { conversationId }) => {
  return await db
    .query("messages")
    .filter((q) => q.in(q.field("conversationId"), conversationId))
    .collect();
});
