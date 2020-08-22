import { Link } from 'gatsby';
import React from 'react';

import GithubLogo from '../../images/GithubLogo.svg';
import LinkedInLogo from '../../images/LinkedInLogo.svg';
import WritingIcon from '../../images/WritingIcon.svg';

import { StyledIcon, StyledLogoWrapper, StyledMenu } from './styles';

const Menu = () => {
    return (
        <>
            <StyledMenu>
                <StyledLogoWrapper>
                    <a
                        href="https://github.com/nlemast"
                        target="_blank"
                    >
                        <StyledIcon href="https://github.com/nlemast" src={GithubLogo} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/nathan-le-master/"
                        target="_blank"
                    >
                        <StyledIcon src={LinkedInLogo} />
                    </a>
                    <Link to="/blog">
                        <StyledIcon src={WritingIcon} />
                    </Link>
                </StyledLogoWrapper>
            </StyledMenu>
        </>
    );
};

export default Menu;
