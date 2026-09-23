import type { Book } from "../types/book";

export const books: Book[] = [
    {
        id: 1,
        title: "1984",
        author: "Джордж Оруэлл",
        pages: 320,
        status: "done",
        rating: 5,
        note: "Классная книга"
    },
    {
        id: 2,
        title: "451 градус по Фаренгейту",
        author: "Рэй Брэдбери",
        pages: 256,
        status: "reading",
        rating: 4,
        note: "Тяжелая книга" 
    },
      {
        id: 3,
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        pages: 500,
        status: "want",
        rating: 5,
        note: "Чудо" 
    }
];