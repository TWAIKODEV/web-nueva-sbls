import { query } from "./_generated/server";

export const getNews = query({
  args: {},
  handler: async ({ db }) => {
    const news = await db.query("news").collect();
    return news;
  },
});