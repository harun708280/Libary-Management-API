import express from "express";

import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "./book.controller";

const router = express.Router();

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);
router.patch("/:bookId", updateBookById);
router.delete("/:bookId", deleteBookById);

export const BookRouter = router;
