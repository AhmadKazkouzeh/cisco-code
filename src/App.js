import React from "react";
import { Home, EpisodeDetails } from "./pages";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/nav-bar";
import "./App.css";
function App() {
  return (
    <div className="App dark:bg-gray-900">
      <NavBar />
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/episode-details" component={EpisodeDetails} />
        </Switch>
      </div>
    </div>
  );
}
export default App;
