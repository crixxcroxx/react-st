import { useState, useEffect } from 'react'

export function Temp() {
  const [count, setCount] = useState(0)
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
    <>
      <p>This is from temp { count }</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p></p>
      <p>Movies</p>
      <ul>
        {films.map(film => (
          <li key={film.episode_id}>{film.title}</li>
        ))}
      </ul>
    </>
  )
}
