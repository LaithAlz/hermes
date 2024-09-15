import { mutation } from "../_generated/server";
import { v } from "convex/values";

export default mutation({
  args: {
    participants: v.array(v.string()),  // Define the expected structure of `participants`
  },
  handler: async ({ db }, { participants }) => {
    const conversationId = await db.insert("conversations", {
      participants,
      createdAt: Date.now(),
    });

    return { conversationId };
  },
});
