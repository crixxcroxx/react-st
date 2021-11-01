import '../App/app.css'
import { useState, useEffect } from 'react'

export default function Films() {
  const [films, setFilms] = useState([])

  async function fetchFilms() {
    let res = await fetch('https://swapi.dev/api/films')
    if(!res.ok) throw new Error(`Failed to fetch data`)
    let data = await res.json()

    setFilms(data.results)
  }

  useEffect(() => fetchFilms(), [])

  return (
    <div className="films">
      <ul>{
        films.map(film => (
          <li key={film.episode_id}>{film.title}</li>
        ))
      }</ul>
    </div>
  )
}
