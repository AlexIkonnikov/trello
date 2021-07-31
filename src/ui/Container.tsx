import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Container: FC<HTMLAttributes<HTMLElement>> = ({ children, ...all }) => {
    return <StyledContainer {...all}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`;
