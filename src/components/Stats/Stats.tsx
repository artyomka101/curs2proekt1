import styled from "@emotion/styled";
import { type Book } from "../../types/book";
import booksIcon from "../../assets/img/books.png";
import checkIcon from "../../assets/img/check.png";
import bookOpenIcon from "../../assets/img/book-open.png";
import bookmarkIcon from "../../assets/img/bookmark.png";
import headerBooksImage from "../../assets/img/header-books.png";

interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  position: relative;
  margin-bottom: 30px;
`;

const HeaderImage = styled.img`
  position: absolute;
  right: -60px;
  bottom: 50px;
  z-index: 2;
  width: 400px;
  height: auto;
  object-fit: contain;
  pointer-events: none;
`;

const StatsWrapper = styled.div`
  display: flex;
  padding: 28px 36px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
`;

const StatsCard = styled.div`
  display: flex;
  flex: 1 1 0;
  align-items: center;
  gap: 18px;
  padding: 0 28px;
  border-right: 1px solid #e6ded3;
  min-width: 0;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }
`;

const IconBox = styled.div<{ variant: "total" | "done" | "reading" | "want" }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 58px;
  height: 58px;
  border-radius: 16px;

  background: ${({ variant }) => {
    if (variant === "done") {
      return "#dcebdd";
    }

    if (variant === "reading") {
      return "#dbeaf4";
    }

    if (variant === "want") {
      return "#e8e5e1";
    }

    return "#efe3d4";
  }};
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

const Label = styled.div`
  font-size: 18px;
  margin-bottom: 6px;
`;

const Value = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

export default function Stats({ books }: StatsProps) {
  const total = books.length;

  const done = books.filter((book) => book.status === "done").length;

  const reading = books.filter((book) => book.status === "reading").length;

  const want = books.filter((book) => book.status === "want").length;

 return (
    <StatsSection>
      <HeaderImage src={headerBooksImage} alt=""/>
      <StatsWrapper>
        <StatsCard>
          <IconBox variant="total">
            <Icon src={booksIcon} />
          </IconBox>
          <div>
            <Label>Всего книг</Label>
            <Value>{total}</Value>
          </div>
        </StatsCard>

        <StatsCard>
          <IconBox variant="done">
            <Icon src={checkIcon} />
          </IconBox>
          <div>
            <Label>Прочитано</Label>
            <Value>{done}</Value>
          </div>
        </StatsCard>

        <StatsCard>
          <IconBox variant="reading">
            <Icon src={bookOpenIcon} />
          </IconBox>
          <div>

            <Label>Читаю</Label>
            <Value>{reading}</Value>
          </div>
        </StatsCard>

        <StatsCard>
          <IconBox variant="want">
            <Icon src={bookmarkIcon} />
          </IconBox>
          <div>
            <Label>Хочу прочитать</Label>
            <Value>{want}</Value>
          </div>
        </StatsCard>
      </StatsWrapper>
    </StatsSection>
  );

}
