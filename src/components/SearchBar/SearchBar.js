import './searchBar.css';

export default function SearchBar(props) {
  function submitted(ev) {
    ev.preventDefault()
    props.addTerm(ev.target[`keyword`].value)
  }

  return (
    <section className="searchBar">
      <form onSubmit={ submitted }>
        <input
          type="text"
          name="keyword"
          className="searchInput"
          placeholder="Keyword"
        />
        <button
          type="submit"
          name="searchBtn"
          className="searchBtn"
        >
          Search
        </button>
      </form>
    </section>
  );
}

