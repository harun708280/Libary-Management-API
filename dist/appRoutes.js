"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_route_1 = require("./modules/book/book.route");
const borrow_route_1 = require("./modules/borrow/borrow.route");
exports.appRouter = express_1.default.Router();
exports.appRouter.get("/", (req, res) => {
    res.json({
        success: true,
        message: " Api Is Working Now ",
    });
});
exports.appRouter.use('/books', book_route_1.BookRouter);
exports.appRouter.use('/borrow', borrow_route_1.borrowRouter);
