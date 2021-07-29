import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export const Col: FC<ReactNode> = ({ children }) => {
    return (
        <Column>
            <ColumnBody>{children}</ColumnBody>
        </Column>
    );
};

const Column = styled.div`
    flex-shrink: 0;
    flex-grow: 0;
    margin-right: 20px;
    width: 20%;
`;

const ColumnBody = styled.div`
    background-color: #ebecf0;
    padding: 10px;
    border-radius: 3px;
`;
