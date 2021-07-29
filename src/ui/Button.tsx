import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Button: FC<ButtonProps> = ({ text, ...all }) => {
    return <StyledButton {...all}>{text}</StyledButton>;
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const StyledButton = styled.button`
    font-size: 11px;
    display: block;
    margin-left: auto;
    cursor: pointer;
    color: white;
    background: #7bc86c;
    border: 1px solid transparent;
    padding: 5px;
    border-radius: 12px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(15, 115, 255, 0.2);
    }
    &:hover {
        background: green;
    }

    &:active {
        background: #7bc87c;
    }

    &:disabled {
        background: green;
        opacity: 0.6;
        cursor: unset;
    }
`;
