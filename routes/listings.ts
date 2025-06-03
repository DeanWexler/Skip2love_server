import express from "express";
import { storage } from "../storage";

const router = express.Router();

// GET /api/listings
router.get("/", async (req, res) => {
  try {
    const listings = await storage.getAllListings();
    console.log("Listings retrieved:", listings);
    res.json(listings);
  } catch (error) {
    console.error("Error getting listings:", error);
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

export default router;
