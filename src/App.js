import "./App.scss";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  return (
    <div>
      <h1>Hat page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
