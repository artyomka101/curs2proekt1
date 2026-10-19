import { useState } from "react";
import "./App.css";
import { type Book } from "./types/book";
import initialBooks from "./data/books";
import { BookList } from "./components/BookList/BookList";
import styled from "@emotion/styled";
import Stats from "./components/Stats/Stats";
import { BookForm } from "./components/BookForm/BookForm";
import { EventFormDemo } from "./components/EventFormDemo/EventFormDemo";

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background: linear-gradient(#fbfaf7, #f6f1ea);
  color: #24211d;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const deleteBook = (id: number) => {
    setBooks((currentBooks) => currentBooks.filter((book)=> book.id !== id));
  }
  return (
    <Page>
      <Container>
        <Stats books = {books}/>
        <BookList books={books} deleteBook = {deleteBook}/>
        <BookForm/>
        <EventFormDemo />
      </Container>
    </Page>
  );
}

export default App;
