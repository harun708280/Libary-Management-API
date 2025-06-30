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

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      filter,
      sortBy = "createdAt",
      sort = "desc",
      limit = "10",
    } = req.query;

    const sortOrder = sort === "asc" ? 1 : -1;
    const query: Record<string, any> = {};

    if (filter) {
      query.genre = filter;
    }

    const books = await Book.find(query)
      .sort({ [sortBy as string]: sortOrder })
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: books,
    });
  } catch (error) {
    next(error);
  }
};

export const getBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.bookId;
  try {
    const book = await Book.findById(id);
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: book,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBookById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.bookId);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
