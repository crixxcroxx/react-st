import UseFetch from '../../UseFetch'

export default function Planets() {
   let data = UseFetch("planets")

   return (
     <div className="planets">
       <ul>{
          data.map(planet => (
            <li key={planet.name}>{planet.name}</li>
          ))
       }</ul>
     </div>
   );
}

