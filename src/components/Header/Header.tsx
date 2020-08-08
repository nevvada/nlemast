import { Link } from 'gatsby';
import React from 'react';

import Menu from '../Menu/Menu';

import { StyledHeader, StyledTitle } from './styles';

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledTitle>
                    <Link to="/">nathan le master</Link>
                </StyledTitle>
                <Menu />
            </StyledHeader>
        </>
    );
};

export default Header;
