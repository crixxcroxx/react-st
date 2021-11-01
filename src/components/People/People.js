import { useState, useEffect } from 'react'

export default function People() {
  const [people, setPeople] = useState([])

  async function fetchPeople() {
    let res = await fetch('https://swapi.dev/api/people')
    if(!res.ok) throw new Error(`Failed to fetch data`)
    let data = await res.json()

    setPeople(data.results)
  }

  useEffect(() => fetchPeople(), [])

  return (
    <div className="people">
      <ul>{
        people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))
      }</ul>
    </div>
  );
}
