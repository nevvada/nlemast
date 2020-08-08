import React from 'react';

import { StyledGlobal } from './styles';

const Layout = ({ children }) => {
    return (
        <>
            <StyledGlobal />

            {children}

            <link
                href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
                rel="stylesheet"
            />
        </>
    );
};

export default Layout;
