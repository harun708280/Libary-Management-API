import { z } from "zod";
import { BookGenres } from "./book.interface";

export const createBookZodSchema = z.object({
  title: z.string(),
  author: z.string(),
  genre: z.enum([...BookGenres] as [string, ...string[]]),
  isbn: z.string(),
  description: z.string().optional(),
  copies: z.string().min(0),
  available: z.boolean().optional(),
});

export const updateBookZodSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  genre: z.enum([...BookGenres] as [string, ...string[]]).optional(),
  isbn: z.string().optional(),
  description: z.string().optional(),
  copies: z.number().min(0).optional(),
  available: z.boolean().optional(),
});
