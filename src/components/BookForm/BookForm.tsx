import styled from "@emotion/styled";
import { useState } from "react";
import { type BookStatus } from "../../types/book";

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

const Inpput = styled.input`
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
    box-shadow: 0 0 0 3 px rgba(159, 139, 118, 0.15);
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
    box-shadow: 0 0 0 3 px rgba(159, 139, 118, 0.15);
  }
`;

const Textarea = styled.textarea`
  min-height: 95px;
  padding: 14px 16px;
  color: #24211d;
  background-color: rgba(255, 255, 255, 0.76);
  border-radius: 12px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #9f8b76;
    box-shadow: 0 0 0 3px rgba(159, 139, 118, 0.15);
  }
`;

export function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");
  const [rating, setRating] = useState(5);
  const [status, setStatus] = useState<BookStatus>("want");

  console.log({title,author,status,note,rating})
  
  return (
    <Form>
      <Title>Добавить книгу</Title>

      <Field>
        Название книги
        <Inpput
          type="text"
          value={title}
          placeholder="Введите название книги"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </Field>

      <Field>
        Автор
        <Inpput
          type="text"
          value={author}
          placeholder="Введите автора"
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </Field>

      <Field>
        Статус
        <Select
          value={status}
          onChange={(event) => {
            setStatus(event.target.value as BookStatus);
          }}
        >
          <option value="want">Хочу прочитать</option>
          <option value="reading">Читаю</option>
          <option value="done">Прочитано</option>
        </Select>
      </Field>

      <Field>
        Оценка
        <Select
          value={rating}
          onChange={(event) => {
            setRating(Number(event.target.value));
          }}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </Field>

      <Field>
        Заметка
        <Textarea
          value={note}
          placeholder="Добавьте короткую заметку"
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
      </Field>
    </Form>
  );
}
