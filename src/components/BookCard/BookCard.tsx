import { type Book, type BookStatus } from "../../types/book";
import styled from "@emotion/styled";

interface BookCardProps {
  book: Book;
}

interface StatusStyleProps {
  status: BookStatus;
}

interface CoverTitleStyleProps {
  length: number;
}
const Card = styled.article`
  display: flex;
  align-items: flex-start;
  gap: 22px;
  padding: 16px;
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid #e6ded3;
  border-radius: 14px;
`;

const DeleteButton = styled.button`
  margin-left: auto;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  padding: 0;
  font-size: 18px;
  background-color: #fffaf4;
  border: 1px solid #ded6cc;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f3e9dd;
  }

  &:active {
    background-color: #e8d8c6;
  }

  &:focus-visible {
    outline: 2px solid #8b735f;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CoverTitle = styled.span<CoverTitleStyleProps>`
  font-weight: 600;
  line-height: 1.15;
  text-align: center;

  font-size: ${({ length }) => {
    if (length > 40) {
      return "8px";
    }
    if (length > 28) {
      return "10px";
    }
    if (length > 16) {
      return "12px";
    }
    return "16px";
  }};
`;

const Title = styled.h3`
  margin: 8px 0;
  font-size: 24px;
  font-weight: 600;
`;

const Author = styled.p`
  margin: 0 0 12px;
  font-size: 18px;
  color: #5f5750;
`;
const Badge = styled.span<StatusStyleProps>`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px;
  font-size: 15px;
  color: ${({ status }) => {
    if (status === "done") {
      return "#2f6b3d";
    }
    if (status === "reading") {
      return "#1f6c9e";
    }
    return "#5f5b55";
  }};
  background-color: ${({ status }) => {
    if (status === "done") {
      return "#c8ebd0";
    }
    if (status === "reading") {
      return "#c5d7e4";
    }
    return "#e2d0b4";
  }};
  border-radius: 30px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ status }) => {
      if (status === "done") {
        return "#2f6b3d";
      }
      if (status === "reading") {
        return "#1f6c9e";
      }
      return "#5f5b55";
    }};
  }
`;
const Info = styled.p`
  margin: 12px 0 0;
  font-size: 17px;
  color: #5f5750;
`;
const Stars = styled.span`
  color: #e6b24c;
  letter-spacing: 1px;
`;

const Cover = styled.div<StatusStyleProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 122px;
  padding: 10px;
  color: #f8f1e7;
  background: ${({ status }) => {
    if (status === "done") {
      return "linear-gradient(135deg, #171414, #7f1d1d)";
    }
    if (status === "reading") {
      return "linear-gradient(135deg, #e9dcc8, #8b735f)";
    }
    return "linear-gradient(135deg, #241b3d, #6d4c8d)";
  }};
  box-shadow: 0 8px 18px rgba(47, 39, 31, 0.2);
  border-radius: 10px;
`;

const statusText = {
  want: "Хочу прочитать",
  reading: "Читаю",
  done: "Прочитано",
};

export function BookCard({ book }: BookCardProps) {
  const rating = book.rating || 0;
  const stars = "★".repeat(rating);

  return (
    <Card>
      <Cover status={book.status}>
        <CoverTitle length={book.title.length}>{book.title}</CoverTitle>
      </Cover>

      <div>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>

        <Badge status={book.status}>{statusText[book.status]}</Badge>

        {book.status === "done" ? (
          <>
            <Info>
              Оценка: {"  "}
              <Stars>{stars}</Stars>
              {"  "}
              {rating}/5
            </Info>
            {book.note && <Info>Заметка: {book.note}</Info>}
          </>
        ) : (
          <Info>Оценка будет доступна после прочтения</Info>
        )}
      </div>
      <DeleteButton type="button" aria-label="Удалить книгу">
        🗑️
      </DeleteButton>
    </Card>
  );
}
