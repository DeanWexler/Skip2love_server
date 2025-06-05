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
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = exports.DatabaseStorage = void 0;
class DatabaseStorage {
    getAllListings() {
        return __awaiter(this, void 0, void 0, function* () {
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
        });
    }
}
exports.DatabaseStorage = DatabaseStorage;
exports.storage = new DatabaseStorage();
