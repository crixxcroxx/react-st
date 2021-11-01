import UseFetch from '../../UseFetch'

export default function Films() {
  let data = UseFetch("films")

  return (
    <div className="films">
      <ul>{
        data.map(film => (
          <li key={film.episode_id}>{film.title}</li>
        ))
      }</ul>
    </div>
  )
}
