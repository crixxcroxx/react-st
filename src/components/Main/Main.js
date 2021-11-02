import './main.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Films from '../Films/Films';
import People from '../People/People';
import Planets from '../Planets/Planets';

export default function Main() {

  return (
    <div className="main">
      <Switch>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/planets">
          <Planets />
        </Route>
        <Route path="/" exact component={ Home } />
      </Switch>
    </div>
  );
}
