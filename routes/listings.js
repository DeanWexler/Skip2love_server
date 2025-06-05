"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const storage_1 = require("../storage");
const router = express_1.default.Router();
// GET /api/listings
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listings = yield storage_1.storage.getAllListings();
        console.log("Listings retrieved:", listings);
        res.json(listings);
    }
    catch (error) {
        console.error("Error getting listings:", error);
        res.status(500).json({ error: "Failed to fetch listings" });
    }
}));
exports.default = router;
