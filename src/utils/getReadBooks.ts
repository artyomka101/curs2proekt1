import { type Book } from "../types/book";

export default function getReadBooks(
  books: Book[]
): Book[] {
  return books.filter((book) => book.isRead);
}
