import { Schema } from "mongoose";
import { BookGenres, IBook } from "./book.interface";

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, enum: BookGenres, required: true },
    isbn: { type: String, required: true, unique: true },
    description: { type: String },
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

bookSchema.pre("save", function (next) {
  this.available === this.copies > 0;
  next();
});

bookSchema.methods.updateAvailability = function () {
  this.available = this.copies > 0;
  return this.save();
};
