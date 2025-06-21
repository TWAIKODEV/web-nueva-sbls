import { 
  users, 
  contactSubmissions,
  admissionApplications,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type AdmissionApplication,
  type InsertAdmissionApplication
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createAdmissionApplication(application: InsertAdmissionApplication): Promise<AdmissionApplication>;
  getAdmissionApplications(): Promise<AdmissionApplication[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const [submission] = await db
      .insert(contactSubmissions)
      .values({
        ...insertSubmission,
        telefono: insertSubmission.telefono || null,
        programa: insertSubmission.programa || null,
        mensaje: insertSubmission.mensaje || null,
      })
      .returning();
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    const submissions = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt));
    return submissions;
  }

  async createAdmissionApplication(insertApplication: InsertAdmissionApplication): Promise<AdmissionApplication> {
    const [application] = await db
      .insert(admissionApplications)
      .values({
        ...insertApplication,
        experiencia: insertApplication.experiencia || null,
        motivacion: insertApplication.motivacion || null,
        educacion: insertApplication.educacion || null,
        empresa: insertApplication.empresa || null,
        cargo: insertApplication.cargo || null,
        cv: insertApplication.cv || null,
      })
      .returning();
    return application;
  }

  async getAdmissionApplications(): Promise<AdmissionApplication[]> {
    const applications = await db
      .select()
      .from(admissionApplications)
      .orderBy(desc(admissionApplications.createdAt));
    return applications;
  }
}

export const storage = new DatabaseStorage();
