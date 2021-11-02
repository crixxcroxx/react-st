import '../App/app.css'
import { NavLink } from 'react-router-dom'
import UseFetch from '../../UseFetch'

export default function Planets() {
  const data = UseFetch("planets")

  return (
    <>
      <div className="planets">
        <h3 className="title">Planets List</h3>
        <ul>{
          data.map((planet, index) => (
            <li key={planet.name}>
              <NavLink activeClassName="activeLink" to={`/planets/${index + 1}`}>
                { planet.name }
              </NavLink>
            </li>
          ))
        }</ul>
      </div>
    </>
  );
}

