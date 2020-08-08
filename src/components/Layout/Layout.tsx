import React from 'react';

import Header from '../Header/Header';

import { StyledGlobal } from './styles';

const Layout = ({ children }) => {
    return (
        <>
            <StyledGlobal />
            <Header />

            {children}

            <link
                href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap"
                rel="stylesheet"
            />
        </>
    );
};

export default Layout;
