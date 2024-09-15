import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    conversationId: v.id("conversations"),
    body: v.string(),
    translatedText: v.optional(v.string()),
    audioUrl: v.optional(v.string()),
    senderId: v.string(),
    sentAt: v.number(),
    textInEnglish: v.string(),
    language: v.string(),
  }).index("by_conversation", ["conversationId"]),

  conversations: defineTable({
    participants: v.array(v.string()),
    createdAt: v.number(),
  }),

  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    createdAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
});
