import { NextFunction, Request, Response } from "express";
import { Book } from "../book/book.model";
import { error } from "console";
import { Borrow } from "./borrow.model";

export const borrowBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { book, quantity, dueDate } = req.body;
    const foundBook = await Book.findById(book);
    if (!foundBook) throw new Error("Book Not Found");
    if (foundBook.copies < quantity)
      throw new Error("Not enough copies available");

    foundBook.copies -= quantity;
    await foundBook.save();
    const borrow = await Borrow.create({ book, quantity, dueDate });
    res.status(200).json({
      success: true,
      message: "Book borrowed successfully",
      data: borrow,
    });
  } catch (error) {
    next(error);
  }
};

export const getBorrowSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const summary = await Borrow.aggregate([
      {
        $group: {
          _id: "$book",
          totalQuantity: { $sum: "$quantity" },
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "_id",
          foreignField: "_id",
          as: "bookDetails",
        },
      },
      {
        $unwind: "$bookDetails",
      },
      {
        $project: {
          _id: 0,
          book: {
            title: "$bookDetails.title",
            isbn: "$bookDetails.isbn",
          },
          totalQuantity: 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Borrowed books summary retrieved successfully",
      data: summary,
    });
  } catch (error) {}
};
