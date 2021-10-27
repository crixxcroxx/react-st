import './app.css';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  const name = "Company Name"

  return (
    <div className="app">
      <Header company={ name }/>
      <SearchBar />
    </div>
  );
}

export default App;
