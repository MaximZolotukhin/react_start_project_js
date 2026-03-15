import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import Body from './layouts/Body/Body';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';

function App() {
  const data = [
    {
      title: 'Изучение HTML + CSS',
      date: new Date(),
      text: 'Изучения верстки сайтов рассширенный курс',
    },
    {
      title: 'Изучение JavaScript ocновы',
      date: new Date(),
      text: 'Изучение основ JS, создание первого приложения',
    },
    {
      title: 'Разработка первого приложения на React + JS',
      date: new Date(),
      text: 'Изучение основ React + JS, конфигурация components',
    },
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[2].title}
              text={data[2].text}
              date={data[2].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
