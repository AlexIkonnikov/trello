import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Item: FC<HTMLAttributes<HTMLLIElement>> = ({ children, ...all }) => {
    return <StyledItem {...all}>{children}</StyledItem>;
};

const StyledItem = styled.li`
    margin-bottom: 10px;
    border: 1px solid transparent;
    border-radius: 5px;
    padding: 3px;
    &:hover {
        border-color: black;
    }
`;
