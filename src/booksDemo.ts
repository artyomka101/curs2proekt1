import { books } from "./data/books";
import {getBookByStatus} from "./utils/getBookByStatus";

const readBooks = getBookByStatus(books, "done");
console.log("Все книги:", books);
console.log("Прочитанные книги:", readBooks);
