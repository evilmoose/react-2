import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [snackData, drinkData] = await Promise.all([
        SnackOrBoozeApi.getSnacks(),
        SnackOrBoozeApi.getDrinks()
      ]);
      setSnacks(snackData);
      setDrinks(drinkData);
      setIsLoading(false);
    }
    loadData();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home snacks={snacks} drinks={drinks} />
        </Route>
        <Route exact path="/snacks">
          <Menu items={snacks} type="Snacks" />
        </Route>
        <Route path="/snacks/:id">
          <MenuItem items={snacks} type="Snack" cantFind="/snacks" />
        </Route>
        <Route exact path="/drinks">
          <Menu items={drinks} type="Drinks" />
        </Route>
        <Route path="/drinks/:id">
          <MenuItem items={drinks} type="Drink" cantFind="/drinks" />
        </Route>
        <Route>
          <p>Hmmm. I can't seem to find what you want.</p>
        </Route>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
