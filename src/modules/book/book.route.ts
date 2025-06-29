import express from "express";
import { createBookZodSchema } from "./book.validation";
import { createBook } from "./book.controller";
import { validateRequest } from "../../middlewares/validateRequest";
const router = express.Router();

router.post("/",createBook);


export const BookRouter=router