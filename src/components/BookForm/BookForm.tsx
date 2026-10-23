import styled from "@emotion/styled";
import { useState, type FormEvent } from "react";
import { type BookStatus, type Book } from "../../types/book";
import { InfoIcon } from "../../icons/icons";
interface BookFormProps {
  addBook: (book: Omit<Book, "id">) => void;
}

const Form = styled.form`
  padding: 28px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #e7dfd4;
  border-radius: 18px;
  box-shadow: 0 12px 32px rgba(82, 68, 52, 0.1);
`;

const Title = styled.h2`
  margin: 0 0 26px;
  font-size: 26px;
  font-weight: 600;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 22px;
  font-size: 18px;
`;

const Input = styled.input`
  /* Исправлено имя */
  height: 50px;
  padding: 0 16px;
  color: #24211d;
  background-color: rgba(255, 255, 255, 0.76);
  border: 1px solid #ded6cc;
  border-radius: 12px;
  &::placeholder {
    color: #9b938a;
  }
  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`;

const Select = styled.select`
  height: 50px;
  padding: 0 16px;
  color: #24211d;
  background-color: rgba(255, 255, 255, 0.76);
  border: 1px solid #ded6cc;
  border-radius: 12px;
  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`;

const Textarea = styled.textarea`
  min-height: 95px;
  padding: 14px 16px;
  color: #24211d;
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 12px;
  border: 1px solid #ded6cc;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`;

const Hint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 4px 0px 30px;
  padding: 18px;
  border-radius: 12px;
  background-color: #f3eee8;
  color: #4f4943;
  font-size: 16px;
  line-height: 1.55;
`;

const Error = styled.p`
  margin: 0 0 18px;
  padding: 12px 14px;
  border-radius: 10px;
  background: #fee2e2;
  color: #b91c1c;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background-color: #242424;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(36, 36, 36, 0.18);
  &:hover {
    background-color: #111111;
  }
`;

export function BookForm({ addBook }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<BookStatus>("want");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !author.trim()) {
      setError("Заполните название книги и автора.");
      return;
    }
    addBook({
      title,
      author,
      status,
      rating: status === "done" ? rating : undefined,
      note: status === "done" ? note : undefined,
      pages: 110,
    });
    setTitle("");
    setAuthor("");
    setRating(5);
    setNote("");
    setStatus("want");
    setError("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Добавить книгу</Title>
      {error && <Error>{error}</Error>}
      <Field>
        Название книги
        <Input
          type="text"
          value={title}
          placeholder="Введите название книги"
          onChange={(event) => setTitle(event.target.value)}
        />
      </Field>
      <Field>
        Автор
        <Input
          type="text"
          value={author}
          placeholder="Введите автора"
          onChange={(event) => setAuthor(event.target.value)}
        />
      </Field>
      <Field>
        Статус
        <Select
          value={status}
          onChange={(event) => setStatus(event.target.value as BookStatus)}
        >
          <option value="want">Хочу прочитать</option>
          <option value="reading">Читаю</option>
          <option value="done">Прочитано</option>
        </Select>
      </Field>

      {status === "done" ? (
        <>
          <Field>
            Оценка
            <Select
              value={rating}
              onChange={(event) => setRating(Number(event.target.value))}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </Field>{" "}
          <Field>
            Заметка
            <Textarea
              value={note}
              placeholder="Добавьте короткую заметку"
              onChange={(event) => setNote(event.target.value)}
            />
          </Field>
        </>
      ) : (
        <Hint>
          <InfoIcon />

          <span>
            Поля оценки и заметки появятся, если вы выберете статус «Прочитано».
          </span>
        </Hint>
      )}

      <Button type="submit"> Добавить книгу </Button>
    </Form>
  );
}
