import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from '../../routes';

import Home from '../Home/Home';

import { StyledGlobal } from './styles';

const App: React.FC = () => (
  <>
    <StyledGlobal />
    <Router>
      <Switch>
        {renderRoutes()}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
