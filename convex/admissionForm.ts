import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitAdmissionForm = mutation({
  args: {
    name: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    program: v.id("programs"),
    company: v.string(),
    position: v.string(),
    experience: v.string(),
    training: v.string(),
    motivation: v.string(),
    cv: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const admissionFormId = await ctx.db.insert("admissionForm", {
      name: args.name,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      program: args.program,
      company: args.company,
      position: args.position,
      experience: args.experience,
      training: args.training,
      motivation: args.motivation,
      cv: args.cv,
    });

    return admissionFormId;
  },
});
