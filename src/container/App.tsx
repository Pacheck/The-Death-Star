import { BrowserRouter, Switch, Route } from "react-router-dom";

import Films from "../components/Films";
import Home from "../components/Home";
import People from "../components/People";
import Planets from "../components/Planets";
import Species from "../components/Species";
import Starships from "../components/Starships";
import Vehicles from "../components/Vehicles";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/films" component={Films} />
        <Route path="/people" component={People} />
        <Route path="/planets" component={Planets} />
        <Route path="/species" component={Species} />
        <Route path="/starships" component={Starships} />
        <Route path="/vehicles" component={Vehicles} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
// films, people, planets, species, starships, vehicles
