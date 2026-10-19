import { useState } from "react";

type EventFormat = "online" | "offline";
export function EventFormDemo() {
  const [title, setTitle] = useState<string | undefined>(undefined);
  const [format, setFormat] = useState<EventFormat>("online");
  const [participants, setParticipants] = useState(10);
  const [description, setDescription] = useState("");

  return (
    <section>
      <h2>Новое мероприятие</h2>
      <label>
        Название
        <input
          type="text"
          value={title ?? ""}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>
      <label>
        Формат
        <select
          value={format}
          onChange={(event) => {
            setFormat(event.target.value as EventFormat);
          }}
        >
          <option value="online">Онлайн</option>
          <option value="offline">Очно</option>
        </select>
      </label>

      <label>
        Количество участников
        <input
          type="number"
          min="1"
          value={participants}
          onChange={(event) => {
            setParticipants(Number(event.target.value));
          }}
        />
      </label>

      <label>
        Описание
        <textarea
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
      </label>

      <div>
        <h3>Текущие данные</h3>
        <p>Название: {title ?? "не указано"}</p>
        <p>Формат: {format}</p>
        <p>Участников: {participants}</p>
        <p>Описание: {description || "не добавлено"}</p>
      </div>
    </section>
  );
}
