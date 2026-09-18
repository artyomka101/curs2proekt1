import { books } from "./data/books";
import getReadBooks from "./utils/getReadBooks";
const readBooks = getReadBooks(books);
console.log("Все книги:", books);
console.log("Прочитанные книги:", readBooks);
