import React, { FC } from 'react';
import styled from 'styled-components';

export const Counter: FC<CounterProps> = ({ numeric }) => {
    return (
        <Circle>
            <Number>{numeric}</Number>
        </Circle>
    );
};

interface CounterProps {
    numeric: number;
}

const Number = styled.b`
    font-size: 0.9rem;
    color: white;
`;

const Circle = styled.div`
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background-color: #f2d600;
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
