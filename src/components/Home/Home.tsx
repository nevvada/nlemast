import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { StyledHeader } from './styles';

const Home: React.FC = () => (
  <>
    <Router>
      <StyledHeader>
        <h1>nathan le master</h1>
        <h2>software engineer, writer, very online person</h2>
      </StyledHeader>
    </Router>
  </>
);

export default Home;
