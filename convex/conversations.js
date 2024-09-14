import { mutation } from "convex/server";
import { Id } from "convex/schema";

export default mutation({
  args: {
    originalText: string,
    translatedText: string,
    language: string,
  },
  handler: async ({ db }, { originalText, translatedText, language }) => {
    await db.insert("conversations", {
      originalText,
      translatedText,
      language,
    });
  },
});
