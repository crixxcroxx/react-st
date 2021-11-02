import './nav.css';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {

  return (
    <nav>
      <h3>{ props.name }</h3>
      <ul>
        <li><NavLink activeClassName="activeLink" to="/films">Films</NavLink></li>
        <li><NavLink activeClassName="activeLink" to="/people">People</NavLink></li>
        <li><NavLink activeClassName="activeLink" to="/planets">Planets</NavLink></li>
      </ul>
    </nav>
  );
}
