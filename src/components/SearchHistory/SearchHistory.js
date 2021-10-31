import '../App/app.css'
import './searchHistory.css';

export default function SearchHistory(props) {
  let idx = 0

  return (
    <div className="search-history">
      <h3 className="div-title">Search History</h3>
      <ul>
        {props.history.map(term => (
          <li key={ idx++ }>{ term }</li>
        ))}
      </ul>
    </div>
  );
}

