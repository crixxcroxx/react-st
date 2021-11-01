import { useState, useEffect } from 'react'

export default function Planets() {
  const [planets, setPlanets] = useState([])

   async function fetchPlanets() {
     let res = await fetch('https://swapi.dev/api/planets')
     if(!res.ok) throw new Error(`Failed to fetch data`)
     let data = await res.json()

     setPlanets(data.results)
   }

   useEffect(() => fetchPlanets(), [])

   return (
     <div className="planets">
       <ul>{
          planets.map(planet => (
            <li key={planet.name}>{planet.name}</li>
          ))
       }</ul>
     </div>
   );
}

