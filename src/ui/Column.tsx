import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Col: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
    return (
        <Column>
            <ColumnBody>{children}</ColumnBody>
        </Column>
    );
};

const Column = styled.div`
    flex-shrink: 0;
    flex-grow: 0;
    margin: 0 20px 10px 0;
    width: 200px;
`;

const ColumnBody = styled.div`
    background-color: #ebecf0;
    padding: 10px;
    border-radius: 10px;
`;
