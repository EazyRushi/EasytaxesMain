
import { db } from "./db";
import { contactInquiries, type InsertContactInquiry } from "@shared/schema";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<void> {
    await db.insert(contactInquiries).values(inquiry);
  }
}

export const storage = new DatabaseStorage();
