import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  nombre: text("nombre").notNull(),
  apellidos: text("apellidos").notNull(),
  email: text("email").notNull(),
  telefono: text("telefono"),
  programa: text("programa"),
  mensaje: text("mensaje"),
  privacidad: boolean("privacidad").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const admissionApplications = pgTable("admission_applications", {
  id: serial("id").primaryKey(),
  nombre: text("nombre").notNull(),
  apellidos: text("apellidos").notNull(),
  email: text("email").notNull(),
  telefono: text("telefono").notNull(),
  programa: text("programa").notNull(),
  experiencia: text("experiencia"),
  motivacion: text("motivacion"),
  educacion: text("educacion"),
  empresa: text("empresa"),
  cargo: text("cargo"),
  cv: text("cv"), // URL or file path
  privacidad: boolean("privacidad").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

export const insertAdmissionApplicationSchema = createInsertSchema(admissionApplications).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type AdmissionApplication = typeof admissionApplications.$inferSelect;
export type InsertAdmissionApplication = z.infer<typeof insertAdmissionApplicationSchema>;
