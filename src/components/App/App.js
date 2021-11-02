import './app.css';
import { useState } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import Main from '../Main/Main';

function App() {
  const name = "Company Name"
  const [terms, setTerms] = useState([])

  function addTerm(term) {
    let newTerms = new Set([term, ...terms])
    setTerms(Array.from(newTerms))
  }


  return (
    <div className="app">
      <Header company={ name }/>
      <SearchBar addTerm={ addTerm } />
      <div className="main-content">
        <SearchHistory history={ terms } />
        <Main />
      </div>
    </div>
  );
}

export default App;
