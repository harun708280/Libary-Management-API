"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const book_interface_1 = require("./book.interface");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: book_interface_1.BookGenres, required: true },
    isbn: {
        type: String,
        required: true,
        unique: [true, "please set different isbn"],
    },
    description: { type: String },
    copies: {
        type: Number,
        required: true,
        min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, default: true },
}, {
    timestamps: true,
    versionKey: false,
});
bookSchema.pre("save", function (next) {
    this.available = this.copies > 0;
    next();
});
bookSchema.methods.updateAvailability = function () {
    this.available = this.copies > 0;
    return this.save();
};
exports.Book = (0, mongoose_1.model)("Book", bookSchema);
