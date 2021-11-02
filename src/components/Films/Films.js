import '../App/app.css'
import { NavLink } from 'react-router-dom'
import UseFetch from '../../UseFetch'

export default function Films() {
  let data = UseFetch("films")

  return (
    <div className="films">
      <h3 className="title">Films List</h3>
      <ul>{
        data.map((film, index) => (
          <li key={film.episode_id}>
            <NavLink activeClassName="activeLink" to={`/films/${index + 1}`}>
              {film.title}
            </NavLink>
          </li>
        ))
      }</ul>
    </div>
  )
}
