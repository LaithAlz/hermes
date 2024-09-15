import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    conversationId: v.id("conversations"),  
    body: v.string(),                   
    senderId: v.string(),            
    sentAt: v.number(),                 
  }).index("by_conversation", ["conversationId"]),

  conversations: defineTable({
    participants: v.array(v.string()),   
    createdAt: v.number(),                 
  }),

  // Table for storing user information
  users: defineTable({
    name: v.string(),                      
    tokenIdentifier: v.string(),   
  }).index("by_token", ["tokenIdentifier"]),
});
