import styled from "@emotion/styled";
import { type Book } from "../../types/book";

interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  margin-bottom: 30px;
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
  flex: 1;
  flex-direction: column;
  gap: 8px;
  padding: 0 28px;
  border-right: 1px solid #494033;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    border-right: none;
    padding-right: 0;
  }
`;

const Label = styled.div`
  font-size: 18px;
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
      <StatsWrapper>
        <StatsCard>
          <Label>Всего книг</Label>
          <Value>{total}</Value>
        </StatsCard>
        <StatsCard>
          <Label>Прочитано</Label>
          <Value>{done}</Value>
        </StatsCard>
        <StatsCard>
          <Label>Читаю</Label>
          <Value>{reading}</Value>
        </StatsCard>
        <StatsCard>
          <Label>Хочу прочитать</Label>
          <Value>{want}</Value>
        </StatsCard>
      </StatsWrapper>
    </StatsSection>
  );
}
