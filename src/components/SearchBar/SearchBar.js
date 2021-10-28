import './searchBar.css';

export default function SearchBar(props) {
  function changed(ev) {
    ev.preventDefault()
  }
  function submitted(ev) {
    ev.preventDefault()
    props.addTerm(ev.target[`keyword`].value)
  }
  function clicked(ev) {
    console.log(`clicked`)
  }

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
    </section>
  );
}

