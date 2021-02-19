import React from 'react';

import { StyledImg } from './styles';

import BongoCat from './bongo-cat.svg';

const Home: React.FC = () => {
  return <StyledImg src={BongoCat} />;
};

export default Home;
