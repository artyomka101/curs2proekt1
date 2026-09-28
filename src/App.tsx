import "./App.css";
import WeatherAdvice from "./components/WeatherAdvice";
import WorkshopCard from "./components/WorkshopCard";


function App() {
  const pageTitle = "Читательский дневник";
  const pageSubtitle = "Мои прочитанные и планируемые книги";
  const totalBook = 3;
  const readingBook = 1;
  const completedBook = 1;

  const plannedBook = totalBook - readingBook - completedBook;

  return (
    <main className="page">
      <WeatherAdvice/>
      <WorkshopCard/>
      <header className="page__header">
        <h1 className="page__title">{pageTitle}</h1>
        <p className="page__descr">{pageSubtitle}</p>
      </header>
      <section className="stats">
        <h2 className="stats__title">Статистика</h2>
        <div className="stats__list">
          <div className="stats__item">
            <p>Всего книг: {totalBook}</p>
          </div>
          <div className="stats__item">
            <p>Читаю сейчас: {readingBook}</p>
          </div>
          <div className="stats__item">
            <p>Планирую: {plannedBook}</p>
          </div>
          <div className="stats__item">
            <p>Закончено: {completedBook}</p>
          </div>
        </div>
      </section>
      <section className="books">
        <h2 className="books__title">Мои книги</h2>
        <ul className="books__list">
          <li className="books__item">
            <h3 className="books__name">1984</h3>
            <p className="books__author">Джорд Оруэлл</p>
            <p className="books__status">Читаю</p>
          </li>
          <li className="books__item">
            <h3 className="books__name">Эхо стеклянного города</h3>
            <p className="books__author">Максим Корсаков</p>
            <p className="books__status">Читаю</p>
          </li>
          <li className="books__item">
            <h3 className="books__name">Полночь в лавке забытых вещей</h3>
            <p className="books__author">Элена Моран</p>
            <p className="books__status">Читаю</p>
          </li>
        </ul>
      </section>
      <section className="new-book">
        <h2 className="new-book__title">Добавить книгу</h2>
        <form className="book-form">
          <div className="book-form__field">
            <label htmlFor="book-title">Название</label>
            <input id="book-title" type="text" className="new-book__title"/>
          </div>

          <div className="book-form__field">
            <label htmlFor="book-author">Автор</label>
            <input id="book-author" type="text" className="new-book__author"/>
          </div>

          <div className="book-form__field">
            <label htmlFor="book-status">Статус</label>
            <select id="book-status">
              <option value="want" >Хочу прочитать</option>
              <option value="reading">Читаю сейчас</option>
              <option value="done">Прочитано</option>
            </select>
          </div>

          <button className="new-book__button" type="submit">
            Добавить книгу
          </button>
        </form>
      </section>
    </main>
  );
}

export default App;
