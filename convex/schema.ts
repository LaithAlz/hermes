import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  conversations: defineTable({
    originalText: v.string(),
    translatedText: v.string(),
    language: v.string(), 
    timestamp: v.number(),
  }),
});
