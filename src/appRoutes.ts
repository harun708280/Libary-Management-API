import express, { Request, Response } from "express";

export const appRouter = express.Router();

appRouter.get("/", (req:Request, res:Response) => {
  res.json({
    success: true,
    message: " Api Is Working Now ",
  });
});
