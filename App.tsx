import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {

  const personName = {
    first: 'indranil',
    last: 'naskar'
  }
  const nameList = [
    {
      first: 'indra',
      last: 'naskar'
    },
    {
      first: 'rahul',
      last: 'halder'
    },
    {
      first: 'abc',
      last: 'pal'
    },
  ]

  return (
    <div className="App">
      <Greet name='indranil' msgCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
