import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from '../../routes';

import Home from '../Home/Home';

import { StyledSection, StyledDiv, StyledGlobal, StyledMain } from './styles';

import posts from '../../posts/allPosts';

import PostsContext from '../../PostsContext';

const App: React.FC = () => (
  <>
    <StyledGlobal />
    <StyledMain>
      <StyledDiv />
      <Router>
        <Home />
        <PostsContext.Provider value={posts}>
          <StyledSection>
            <Switch>{renderRoutes()}</Switch>
          </StyledSection>
        </PostsContext.Provider>
      </Router>
    </StyledMain>
  </>
);

export default App;
