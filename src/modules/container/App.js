import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from '../container/Main.js';
import Login from '../login/login.js';
import ErrorComponent from '../sorryPages/404_page.js';

const App = () => (
  <div>
    <main>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Main} />
        <Route exact path="/dashboard" component={Main} />
        <Route exact path="/error" component={ErrorComponent} />
        <Route path="*" component={ErrorComponent} />
      </Switch>
    </main>
  </div>
);

export default App;
