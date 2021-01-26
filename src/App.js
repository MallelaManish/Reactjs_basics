
import Person from './components/person'
import React from "react";
import Message from "./components/message"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/person">Person</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
           
          </Route>
          <Route path="/users">
            <Message />
          </Route>
          <Route path="/person">
          <Person name="manish"/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
