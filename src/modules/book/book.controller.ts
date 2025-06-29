import { NextFunction, Request, Response } from "express";
import { Book } from "./book.model";

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await Book.create(req.body);
    res.json({
      success: true,
      message: "Book Created SuccessFully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};
