import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import ProgrammingBlog from '../ProgrammingBlog/ProgrammingBlox';
import RandomStuffBlog from '../RandomStuffBlog/RandomStuffBlog';

import { StyledGlobal } from './styles';

const App: React.FC = () => (
  <>
    <StyledGlobal />
    <Router>
      <Switch>
        <Route path="/codingStuff">
          <ProgrammingBlog />
        </Route>
        <Route path="/randomStuff">
          <RandomStuffBlog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
