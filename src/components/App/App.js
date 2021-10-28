import './app.css';
import { useState} from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import Login from '../Login/Login';

function App() {
  const name = "Company Name"
  const [terms, setTerms] = useState([])

  function addTerm(term) {
    setTerms([term, ...terms])
  }

  return (
    <div className="app">
      <Header company={ name }/>
      <SearchBar addTerm={ addTerm } />
      <SearchHistory history={ terms } />
      <Login />
    </div>
  );
}

export default App;
