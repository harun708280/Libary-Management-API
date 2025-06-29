import express, { Request, Response } from "express";
import cors from "cors";
import { appRouter } from "./appRoutes";
import { errorHandler } from "./middlewares/errorHandler";

export const app = express();
app.use(cors());
app.use(express.json());

app.use('/api',appRouter)

app.use((req:Request, res:Response) => {
  res.status(404).json({ success: false, message: "Api Not Found" });
});
app.use(errorHandler) 
