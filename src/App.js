import React from "react";
import { Route, Switch } from "react-router-dom";
import "./default.scss";
import HomepageLayout from "./layouts/HomepageLayout";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
