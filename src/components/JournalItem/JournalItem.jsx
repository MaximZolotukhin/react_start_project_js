import './JournalItem.css';

function JournalItem() {
  const title = 'Разработка первого приложения на React + JS';
  const date = new Date();
  const text = 'Изучение основ React + JS, конфигурация components';

  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{date.toString()}</div>
        <div className="journal-item__text">{text}</div>
      </h2>
    </div>
  );
}

export default JournalItem;
