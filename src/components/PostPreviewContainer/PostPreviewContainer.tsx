import React from 'react';

import { StyledTitle, StyledMain } from './styles';

const PostPreviewContainer = ({ children }) => {
    return (
        <>
            <StyledMain>
                <StyledTitle>scribbles</StyledTitle>
                {children}
            </StyledMain>
        </>
    );
};

export default PostPreviewContainer;
