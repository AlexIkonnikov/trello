import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Item: FC<HTMLAttributes<HTMLLIElement>> = ({ children, ...all }) => {
    return <StyledItem {...all}>{children}</StyledItem>;
};

const StyledItem = styled.li`
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 3px;
    background: white;
    max-width: 400px;
    word-break: break-word;
`;
