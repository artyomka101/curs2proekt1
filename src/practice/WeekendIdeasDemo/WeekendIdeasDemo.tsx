import { useState } from "react";

type IdeaCategory = "walk" | "culture" | "food";

interface WeekendIdea {
  id: number;
  title: string;
  category: IdeaCategory;
  note: string;
}

type NewWeekendIdea = Omit<WeekendIdea, "id">;

interface IdeaFormProps {
  addIdea: (idea: NewWeekendIdea) => void;
}

function IdeaForm({ addIdea }: IdeaFormProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<IdeaCategory>("walk");
  const [note, setNote] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        addIdea({
          title,
          category,
          note,
        });

        setTitle("");
        setCategory("walk");
        setNote("");
      }}
    >
      <label>
        Идея
        <input
          type="text"
          value={title}
          placeholder="Прогулка у реки"
          required
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </label>

      <label>
        Категория
        <select
          value={category}
          onChange={(event) => {
            setCategory(event.target.value as IdeaCategory);
          }}
        >
          <option value="walk">Прогулка</option>
          <option value="culture">Культура</option>
          <option value="food">Еда</option>
        </select>
      </label>

      <label>
        Заметка
        <textarea
          value={note}
          placeholder="Почему стоит?"
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
      </label>

      <button type="submit">Добавить идею</button>
    </form>
  );
}

export function WeekendIdeasDemo() {
  const [ideas, setIdeas] = useState<WeekendIdea[]>([]);

  const addIdea = (idea: NewWeekendIdea) => {
    const newIdea: WeekendIdea = {
      id: Date.now(),
      ...idea,
    };

    setIdeas((currentIdeas) => [...currentIdeas, newIdea]);
  };

  return (
    <section>
      <h2>Идеи на выходные</h2>

      <IdeaForm addIdea={addIdea} />

      {ideas.length === 0 ? (
        <p>Идей пока нет.</p>
      ) : (
        <ul>
          {ideas.map((idea) => (
            <li key={idea.id}>
              <h3>{idea.title}</h3>
              <p>Категория: {idea.category}</p>
              {idea.note && <p>{idea.note}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}