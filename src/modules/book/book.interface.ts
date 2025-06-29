export const BookGenres = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
] as const;

export type IBookGenre = (typeof BookGenres)[number];
export interface IBook {
  title: string;
  author: string;
  genre: IBookGenre;
  isbn: string;
  description?: string;
  copies: number;
  available?: boolean;
}
