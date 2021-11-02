import '../App/app.css'
import { NavLink } from 'react-router-dom'
import UseFetch from '../../UseFetch'

export default function People() {
  let data = UseFetch("people")

  return (
    <div className="people">
      <h3 className="title">People List</h3>
      <ul>{
        data.map((person, index) => (
          <li key={person.name}>
            <NavLink activeClassName="activeLink" to={`/people/${index + 1}`}>
              {person.name}
            </NavLink>
          </li>
        ))
      }</ul>
    </div>
  );
}
