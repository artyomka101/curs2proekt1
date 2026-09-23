import { type Book, type BookStatus } from "../types/book";

// export default function getReadBooks(
//   books: Book[]
// ): Book[] {
//   return books.filter((book) => book.isRead);
// }

export function getBookByStatus(books: Book[], status: BookStatus): Book[] {
  return books.filter((book) => {
    return book.status === status;
  });
}
