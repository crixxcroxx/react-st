import UseFetch from '../../UseFetch'

export default function People() {
  let data = UseFetch("people")

  return (
    <div className="people">
      <ul>{
        data.map(person => (
          <li key={person.name}>{person.name}</li>
        ))
      }</ul>
    </div>
  );
}
