import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav(props) {

  return (
    <nav>
      <h3>{ props.name }</h3>
      <ul>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/planets">Planets</Link></li>
      </ul>
    </nav>
  );
}
