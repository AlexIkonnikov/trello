import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Item: FC<HTMLAttributes<HTMLLIElement>> = ({ children, ...all }) => {
    return <StyledItem {...all}>{children}</StyledItem>;
};

const StyledItem = styled.li`
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    padding: 3px;
    max-width: 400px;
    word-break: break-word;
`;
