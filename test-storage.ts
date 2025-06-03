import { storage } from "./storage";

(async () => {
  const listings = await storage.getAllListings();
  console.log("Listings:", listings);
})();
