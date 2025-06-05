"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const listings_1 = __importDefault(require("./listings"));
const router = (0, express_1.Router)();
console.trace("Mounting listings router");
router.use("/listings", listings_1.default);
exports.default = router;
