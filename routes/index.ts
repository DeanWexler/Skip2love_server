import { Router } from "express";
import listingsRouter from "./listings";

const router = Router();

console.trace("Mounting listings router");

router.use("/listings", listingsRouter);

export default router;
