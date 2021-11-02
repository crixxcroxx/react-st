import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Planets({findPlanet}) {
  const [data, setData] = useState(null)
  const {id} = useParams()

  useEffect(() => setData(findPlanet(id)), [findPlanet, id])

  return (
    <div className="details">
      <h3>{ data && data.name }</h3>
      <p>{ data && data.terrain }</p>
    </div>
  );
}
