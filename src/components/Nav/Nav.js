import './nav.css';
import Link from '../Link/Link';

export default function Nav(props) {
  const links = [
    {title: "Home", href: "https://youtube.com"},
    {title: "Films", href: "https://youtube.com"},
    {title: "Archive", href: "https://youtube.com"}
  ]

  return (
    <nav>
      <h3>{ props.name }</h3>
      <ul>{
        links.map(lnk => (
          <li key={ lnk.title }>
            <Link link={ lnk }/>
          </li>
        ))
      }</ul>
    </nav>
  );
}
