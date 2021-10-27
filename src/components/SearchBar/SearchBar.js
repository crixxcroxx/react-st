import './searchBar.css';
import { useState} from 'react';

export default function SearchBar(props) {
  function changed(ev) {
    ev.preventDefault()
  }
  function submitted(ev) {
    ev.preventDefault()
    setHistory(ev.target[`keyword`].value)
    console.log(`Submitted`)
  }
  function clicked(ev) {
    console.log(`clicked`)
  }

  const [history, setHistory] = useState('default')

  return (
    <section className="searchBar">
      <form onSubmit={ submitted }>
        <input
          type="text"
          name="keyword"
          className="searchInput"
          placeholder="Keyword"
          onInput={ changed }
        />
        <button
          type="submit"
          name="searchBtn"
          className="searchBtn"
          onClick={ clicked }
        >
          Search
        </button>
      </form>
      <p>{ history }</p>
    </section>
  );
}

