import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from '../../routes';

import Home from '../Home/Home';

import { StyledGlobal, StyledMain } from './styles';

const App: React.FC = () => (
  <StyledMain>
    <StyledGlobal />
    <Router>
      <Home />
      <Switch>
        {renderRoutes()}
      </Switch>
    </Router>
  </StyledMain>
);

export default App;
