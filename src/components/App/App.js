import './app.css';
import Header from '../Header/Header';

function App() {
  const name = "Company Name"

  return (
    <div className="app">
      <Header company={ name }/>
    </div>
  );
}

export default App;
