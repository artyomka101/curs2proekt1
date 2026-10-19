import { useState, type ChangeEvent } from "react";
export type Theme = "light" | "dark";

export function ProfileSettings() {
  const [userName, setUserName] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useState<Theme>("light");
  const [bioText, setBioText] = useState<string>("");
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);
  const [textSize, setTextSize] = useState<number>(16);

  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBioText(event.target.value);
  };

  const togglePreview = () => {
    setIsPreviewVisible((prev) => !prev);
  };

  const handleReset = () => {
    setUserName(undefined);
    setTheme("light");
    setTextSize(16);
    setBioText("");
    setIsPreviewVisible(true);
  };

  return (
    <section>
      <h2>Настройки профиля</h2>
      <label>
        Имя пользователя
        <input
          type="text"
          value={userName ?? ""}
          onChange={(event) => {
            setUserName(event.target.value);
          }}
        />
      </label>
      <label>
        Тема оформления
        <select
          value={theme}
          onChange={(event) => {
            setTheme(event.target.value as Theme);
          }}
        >
          <option value="dark">Тёмная</option>
          <option value="light">Светлая</option>
        </select>
      </label>
      <label>
        Размер текста
        <input
          type="number"
          min={12}
          max={30}
          value={textSize}
          onChange={(event) => {
            setTextSize(Number(event.target.value));
          }}
        />
      </label>
      <label>
        Описание профиля
        <textarea value={bioText} onChange={handleBioChange} />
      </label>
      <div>
        <button type="button" onClick={togglePreview}>
          {isPreviewVisible ? "Скрыть просмотр" : "Показать просмотр"}
        </button>
        <button type="button" onClick={handleReset}>
          Сбросить настройки
        </button>
      </div>
      {isPreviewVisible && (
        <div>
          <h3>Предварительный просмотр</h3>
          <p>Имя: {userName?.trim() ? userName : "Имя не указано"}</p>
          <p>Тема: {theme === "light" ? "Светлая" : "Тёмная"}</p>
          <p>Описание: {bioText.trim() ? bioText : "Описание не добавлено"}</p>
          <p style={{ fontSize: `${textSize}px` }}>
            Текст с выбранным размером ({textSize}px)
          </p>
        </div>
      )}
    </section>
  );
}
