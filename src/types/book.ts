export type BookStatus = "want" | "reading" | "done";


export interface Book {
  id: number;
  title: string;
  author: string;
  pages: number;
  status: BookStatus;
  rating?: number;
  note?: string;
  cover?: string;
};
