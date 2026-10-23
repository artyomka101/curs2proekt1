import { useState } from "react";
import "./App.css";
import { type Book } from "./types/book";
import initialBooks from "./data/books";
import { BookList } from "./components/BookList/BookList";
import styled from "@emotion/styled";
import Stats from "./components/Stats/Stats";
import { BookForm } from "./components/BookForm/BookForm";
import { EventFormDemo } from "./components/EventFormDemo/EventFormDemo";
import { ProfileSettings } from "./components/ProfileSettings/ProfileSettings";
import { WeekendIdeasDemo } from "./practice/WeekendIdeasDemo/WeekendIdeasDemo";
import bookLogo from "./assets/img/book-logo.png";
const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background:
    radial-gradient(
      circle at top right,
      rgba(221, 214, 197, 0.35),
      transparent 32%
    ),
    linear-gradient(180deg, #fbfaf7 0%, #f6f1ea 100%);
  color: #24211d;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const HeaderLeft = styled.div``;

const HeaderIcon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  margin: 10px 0 0 90px;
  font-size: 24px;
  color: #756f68;
`;

const Content = styled.main`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const BookListColumn = styled.div`
  flex: 1.45 1 0;
  min-width: 0;
`;

const BookFormColumn = styled.div`
  flex: 1 1 1;
  min-width: 0;
`;

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const deleteBook = (id: number) => {
    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
  };

  const addBook = (book: Omit<Book, "id">) => {
    const newBook: Book = {
      id: Date.now(),
      ...book,
    };

    setBooks((currentBooks) => [...currentBooks, newBook]);
  };
  return (
    <Page>
      <Header>
        <HeaderLeft>
          <HeaderTitle>
            <HeaderIcon src={bookLogo} alt="Логотип" />
            <Title>Читательский дневник</Title>
          </HeaderTitle>
          <Subtitle>Мои книги. мысли и впечатления.</Subtitle>
        </HeaderLeft>
      </Header>
      <Stats books={books} />
      <Content>
        <BookListColumn>
          <BookList books={books} deleteBook={deleteBook} />
        </BookListColumn>
        <BookFormColumn>
          <BookForm addBook={addBook} />
        </BookFormColumn>

        {/* <WeekendIdeasDemo />
        <EventFormDemo />
        <ProfileSettings /> */}
      </Content>
    </Page>
  );
}

export default App;
