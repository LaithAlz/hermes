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

export const storeMessage = mutation(
  async (
    { db },
    {
      conversationId,
      senderId,
      body,
      translatedText,
      audioUrl,
      textInEnglish,
      language,
    }
  ) => {
    await db.insert("messages", {
      conversationId,
      body,
      translatedText,
      audioUrl,
      senderId,
      textInEnglish,
      language,
      sentAt: Date.now(),
    });
  }
);
export const getMessages = query(async ({ db }, { conversationId }) => {
  const messages = await db
    .query("messages")
    .withIndex("by_conversation", (q) => q.eq("conversationId", conversationId))
    .order("asc", "sentAt")
    .collect();
  return messages;
});

export const registerUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    tokenIdentifier: v.string(),
  },
  handler: async ({ db }, { name, email, tokenIdentifier }) => {
    const existingUser = await db
      .query("users")
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", tokenIdentifier))
      .unique();

    if (existingUser) {
      return existingUser;
    }

    const userId = await db.insert("users", {
      tokenIdentifier: tokenIdentifier,
      email: email,
      name: name,
      createdAt: Date.now(),
    });

    return { _id: userId, name, email, tokenIdentifier };
  },
});

export const getAllUsers = query({
  handler: async ({ db }) => {
    return await db.query("users").collect();
  },
});

export const getUserById = query({
  args: {
    userId: v.string(),
  },
  handler: async ({ db }, { userId }) => {
    return await db.get(userId);
  },
});

export const getUserByToken = query({
  args: {
    tokenIdentifier: v.string(),
  },
  handler: async ({ db }, { tokenIdentifier }) => {
    const user = await db
      .query("users") 
      .withIndex("by_token", q => q.eq("tokenIdentifier", tokenIdentifier)) 
      .first(); 

    return user; 
  },
});