import '../App/app.css'
import './movies.css'
import { useState, useEffect } from 'react'

export default function Movies() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    fetchData('films')
  }, [films])

  async function fetchData(type) {
    let url = `https://swapi.dev/api/${type}`
    let response = await fetch(url)
    if(!response.ok) throw new Error('err')

    let data = await response.json()
    setFilms(data.results)
  }

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
