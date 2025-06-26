import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitContactForm = mutation({
  args: {
    name: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    program: v.id("programs"),
    message: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const contactFormId = await ctx.db.insert("contactForm", {
      name: args.name,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      program: args.program,
      message: args.message,
    });

    return contactFormId;
  },
});
