import './header.css';
import Nav from '../Nav/Nav';

export default function Header(props) {
  return (
    <header>
      <Nav name={ props.company } />
    </header>
  );
}
