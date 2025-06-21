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

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createAdmissionApplication(application: InsertAdmissionApplication): Promise<AdmissionApplication>;
  getAdmissionApplications(): Promise<AdmissionApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private admissionApplications: Map<number, AdmissionApplication>;
  private currentUserId: number;
  private currentContactId: number;
  private currentAdmissionId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.admissionApplications = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentAdmissionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }

  async createAdmissionApplication(insertApplication: InsertAdmissionApplication): Promise<AdmissionApplication> {
    const id = this.currentAdmissionId++;
    const application: AdmissionApplication = { 
      ...insertApplication, 
      id, 
      createdAt: new Date() 
    };
    this.admissionApplications.set(id, application);
    return application;
  }

  async getAdmissionApplications(): Promise<AdmissionApplication[]> {
    return Array.from(this.admissionApplications.values()).sort(
      (a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0)
    );
  }
}

export const storage = new MemStorage();
