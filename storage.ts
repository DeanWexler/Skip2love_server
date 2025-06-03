import { IStorage } from "../shared/interfaces/IStorage";
import { Listing } from "../shared/types/Listing";

export class DatabaseStorage implements IStorage {
  async getAllListings(): Promise<Listing[]> {
    // Fake data for now — you can later replace this with DB logic
    return [
      {
        id: "1",
        title: "Sample Listing",
        description: "This is a test listing.",
        city: "Eureka",
        images: [],
        userId: "abc123",
        isPremium: false
      }
    ];
  }
}

export const storage = new DatabaseStorage();
