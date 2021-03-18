import React from 'react';

import { StyledImg } from './styles';

import BongoCat from '../../images/BongoCat.svg';

const Home: React.FC = () => (
  <StyledImg
    alt="bongo cat"
    src={BongoCat}
  />
);

export default Home;
