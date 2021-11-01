import { useState, useEffect } from 'react'

export default function UseFetch(endPoint) {
  const [data, setData] = useState([])
  let o = 0

  async function fetchData() {
    let res = await fetch(`https://swapi.dev/api/${endPoint}`)
    if(!res.ok) throw new Error(`Failed to fetch data`)
    let data = await res.json()

    setData(data.results)
  }

  useEffect(() => {
    fetchData()
      .then(() => o + 1)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if(!o) return data
}
