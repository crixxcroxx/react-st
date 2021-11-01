import './app.css';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import SearchHistory from '../SearchHistory/SearchHistory';
import Main from '../Main/Main';

function App() {
  const name = "Company Name"
  const [terms, setTerms] = useState([])
//   const [dataType, setDataType] = useState('films')

  function addTerm(term) {
    let newTerms = new Set([term, ...terms])
    setTerms(Array.from(newTerms))
  }

  //

//   const [items, setItems] = useState([])

//   useEffect(() => {
//     fetchData(terms[0])
//   }, [terms]) // eslint-disable-line react-hooks/exhaustive-deps

//   useEffect(() => {
//     console.log(`initial render`)
//     fetchData()
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps

//   async function fetchData(keyword) {
//     let url = `https://swapi.dev/api/${dataType}`
//     if(keyword) { url += `/?search=${keyword}` }
//     let response = await fetch(url)
//     if(!response.ok) throw new Error('err')
//
//     let data = await response.json()
//     setItems(data.results)
//   }

  return (
    <div className="app">
      <Header company={ name }/>
      <SearchBar addTerm={ addTerm } />
      <div className="results">
        <SearchHistory history={ terms } />
        <Main />
      </div>
    </div>
  );
}

export default App;
