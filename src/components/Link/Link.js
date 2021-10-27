import './link.css';

export default function Link(props) {
  return (
    <a href={ props.link.href }>{ props.link.title }</a>
  );
}

