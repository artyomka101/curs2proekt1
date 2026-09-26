import "./App.css";

function App() {
  const pageTitle = "Читательский дневник";
  const pageSubtitle = "Мои прочитанные и планируемые книги";
  const totalBook = 3;
  const readingBook = 1;
  const completedBook = 1;

  const plannedBook = totalBook - readingBook - completedBook;

  return (
    <main className="page">
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
    </main>
  );
}

export default App;
