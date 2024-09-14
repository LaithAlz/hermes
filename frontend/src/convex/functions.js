import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const storeConversation = mutation({
  args: { text: v.string() },
  handler: async (ctx, args) => {
    console.log('hi')
    await ctx.db.insert("conversations", { user: 1, content: args.text });
  },
});