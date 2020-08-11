import React from 'react';

import { StyledPost } from './styles';

const PostPreview = ({ children }) => {
    return (
        <>
            <StyledPost>{children}</StyledPost>
        </>
    );
};

export default PostPreview;
