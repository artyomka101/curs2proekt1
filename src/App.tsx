import "./App.css";
// import WeatherAdvice from "./components/WeatherAdvice";
// import WorkshopCard from "./components/WorkshopCard";
import { books } from "./data/books";
import { BookList } from "./components/BookList/BookList";
import styled from "@emotion/styled";
import ButtonDemo from "./practice/book-format/StyledButtonDemo";
import Stats from "./components/Stats/Stats";
import { TicketStatsDemo } from "./practice/TicketStatsDemo";
import { ProductsStatsDemo } from "./practice/WarehouseStatsDemo";
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
  // const pageTitle = "Читательский дневник";
  // const pageSubtitle = "Мои прочитанные и планируемые книги";
  // const totalBook = 3;
  // const readingBook = 1;
  // const completedBook = 1;
  // const plannedBook = totalBook - readingBook - completedBook;

  return (
    <Page>
      <Container>
        <Stats books = {books}/>
        <BookList books={books}/>
        <TicketStatsDemo/>
        <ProductsStatsDemo/>
        <ButtonDemo/>
      </Container>
    </Page>
  );
}

export default App;
