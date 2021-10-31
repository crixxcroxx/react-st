import '../App/app.css'
import './movies.css'

export default function Movies(props) {
  const { films } = props

  return (
    <div className="movies">
      <h3 className="div-title">Movies</h3>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
    </div>
  )
}
