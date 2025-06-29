import express, { Request, Response } from "express";
import { BookRouter } from "./modules/book/book.route";

export const appRouter = express.Router();

appRouter.get("/", (req:Request, res:Response) => {
  res.json({
    success: true,
    message: " Api Is Working Now ",
  });
});

appRouter.use('/book',BookRouter)
