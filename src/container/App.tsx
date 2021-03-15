import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../components/Home";
import CustomComponent from "../components/CustomComponent";

import GlobalStyle from "./globalStyles";
import NotFound from "../pages/NotFound";
import Details from "../pages/Details";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/films" component={CustomComponent} />
          <Route path="/people" component={CustomComponent} />
          <Route path="/planets" component={CustomComponent} />
          <Route path="/species" component={CustomComponent} />
          <Route path="/starships" component={CustomComponent} />
          <Route path="/vehicles" component={CustomComponent} />
          <Route path="/details/:path?" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
