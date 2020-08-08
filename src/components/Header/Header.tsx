import { Link } from 'gatsby';
import React from 'react';

import { StyledHeader, StyledTitle } from './styles';

const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledTitle>
                    <Link to="/">nathan le master</Link>
                </StyledTitle>
            </StyledHeader>
        </>
    );
};

export default Header;
