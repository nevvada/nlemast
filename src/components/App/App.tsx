import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from '../../routes';

import Header from '../Header/Header';

import { StyledSection, StyledDiv, StyledGlobal, StyledMain } from './styles';

import posts from '../../posts/allPosts';

import PostsContext from '../../PostsContext';

const App: React.FC = () => (
  <>
    <StyledGlobal />
    <StyledMain>
      <StyledDiv />
      <Router>
        <Header />
        <PostsContext.Provider value={posts}>
          <StyledSection>
            <Suspense fallback={null}>
              <Switch>{renderRoutes()}</Switch>
            </Suspense>
          </StyledSection>
        </PostsContext.Provider>
      </Router>
    </StyledMain>
  </>
);

export default App;
