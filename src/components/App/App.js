import './app.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import Movies from '../Movies/Movies';

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
      <div className="results">
        <SearchHistory history={ terms } />
        <Movies />
      </div>
    </div>
  );
}

export default App;
