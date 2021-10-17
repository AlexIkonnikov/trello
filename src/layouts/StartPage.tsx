import React, { FC } from 'react'
import styled from 'styled-components';

export const StartPage: FC = ({ children }) => {
    return (
        <Center>
            {children}
        </Center>
    );
}

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
`;
