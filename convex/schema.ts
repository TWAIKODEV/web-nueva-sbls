import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  programs: defineTable({
    path: v.string(),
    cover: v.string(),
    type: v.union(
      v.literal('specialization'),
      v.literal('master'),
    ),
    title: v.string(),
    introduction: v.string(),
    targets: v.string(),
    teachers: v.optional(v.array(v.object({
        name: v.string(),
        img: v.string(),
        description: v.string(),
        charge: v.optional(v.string()),
        partner: v.optional(v.boolean()),
        order: v.optional(v.number()),
      }))),
    aimedAt: v.string(),
    duration: v.string(),
    schedule: v.string(),
    hours: v.string(),
    format: v.string(),
    fees: v.string(),
    metaDescription: v.string(),
    metaKeywords: v.string(),
  }),

  contactForm: defineTable({
    name: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    program: v.id("programs"),
    message: v.optional(v.string()),
  }),

  admissionForm: defineTable({
    name: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    program: v.id("programs"),
    company: v.string(),
    position: v.string(),
    linkedin: v.string(),
    experience: v.string(),
    howDidYouKnowUs: v.string(),
    whyDidYouChooseUs: v.string(),
    reasonsToStudy: v.string(),
    cv: v.optional(v.string()),
  }),
});