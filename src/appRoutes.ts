import express, { Request, Response } from "express";
import { BookRouter } from "./modules/book/book.route";
import { borrowRouter } from "./modules/borrow/borrow.route";

export const appRouter = express.Router();

appRouter.get("/", (req:Request, res:Response) => {
  res.json({
    success: true,
    message: " Api Is Working Now ",
  });
});

appRouter.use('/books',BookRouter)
appRouter.use ('/borrow',borrowRouter)
