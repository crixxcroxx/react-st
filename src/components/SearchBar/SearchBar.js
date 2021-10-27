 import './searchBar.css';

export default function SearchBar(props) {
  function changed(ev) {
    ev.preventDefault()
    console.log(ev.target.value)
  }
  function submitted(ev) {
    ev.preventDefault()
    console.log(`Submitted`)
  }

  return (
    <section className="searchBar">
      <form onSubmit={ submitted }>
        <input
          type="text"
          name="keyword"
          className="searchInput"
          placeholder="Keyword"
          onInput={changed}
        />
        <button type="submit" name="searchBtn" className="searchBtn">Search</button>
      </form>
    </section>
  );
}

