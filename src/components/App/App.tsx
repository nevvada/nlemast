import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from '../../routes';

import Home from '../Home/Home';

import { StyledArticle, StyledDiv, StyledGlobal, StyledMain } from './styles';

const App: React.FC = () => (
  <>
    <StyledGlobal />
    <StyledMain>
      <StyledDiv />
      <Router>
        <Home />
        <StyledArticle>
          <Switch>{renderRoutes()}</Switch>
        </StyledArticle>
      </Router>
    </StyledMain>
  </>
);

export default App;
