import { query } from "./_generated/server";

export const getEvents = query({
  args: {},
  handler: async ({ db }) => {
    const events = await db.query("events").collect();
    return events;
  },
});