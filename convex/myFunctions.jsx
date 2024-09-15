import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createConversation = mutation({
  args: {
    participants: v.array(v.string()),
  },
  handler: async ({ db }, { participants }) => {
    const conversationId = await db.insert("conversations", {
      participants,
      createdAt: Date.now(),
    });

    return { conversationId };
  },
});

export const getAllConversations = query({
  handler: async ({ db }) => {
    return await db.query("conversations").collect();
  },
});

export const getConversation = query({
  args: {
    conversationId: v.id("conversations"), 
  },
  handler: async ({ db }, { conversationId }) => {
    const conversation = await db.get(conversationId);

    if (!conversation) {
      throw new Error(`Conversation with ID ${conversationId} not found`);
    }

    return conversation;
  },
});

export const getConversations = query(async ({ db }, { conversationId }) => {
  return await db
    .query("messages")
    .filter((q) => q.eq(q.field("conversationId"), conversationId))
    .collect();
});
