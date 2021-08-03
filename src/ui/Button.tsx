import React, { FC, ButtonHTMLAttributes } from 'react';
import styled, {CSSProp} from 'styled-components';

export const Button: FC<ButtonProps> = ({ text, view, ...outerProps }) => {
    switch (view) {
        case 'danger':
            return <DangerButton {...outerProps}>{text}</DangerButton>;
        case 'warrning':
            return <WarrningButton {...outerProps}>{text}</WarrningButton>;
        default:
            return <PrimaryButton {...outerProps}>{text}</PrimaryButton>;
    }
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    view?: 'primary' | 'danger' | 'warrning',
    css?: CSSProp
}

const PrimaryButton = styled.button<{css?: CSSProp}>`
    font-size: 11px;
    display: block;
    cursor: pointer;
    color: white;
    background: #3467eb;
    border: 1px solid transparent;
    padding: 5px;
    border-radius: 5px;
    ${props => props.css ?? ''}

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(15, 115, 255, 0.2);
    }
    &:hover {
        background: #1447c9;
    }

    &:active {
        background: #3467eb;
    }

    &:disabled {
        background: #3467eb;
        opacity: 0.6;
        cursor: unset;
    }
`;

const WarrningButton = styled(PrimaryButton)`
    background-color: #d1d119;
    &:hover {
        background:#b8b807;
    }

    &:active {
        background: #d1d119;
    }

    &:disabled {
        background: #d1d119;
        opacity: 0.6;
        cursor: unset;
    }
`;

const DangerButton = styled(PrimaryButton)`
    background-color: #d61d1d;
    &:hover {
        background: #bd2020;
    }

    &:active {
        background: #d61d1d;
    }

    &:disabled {
        background: #d61d1d;
        opacity: 0.6;
        cursor: unset;
    }
`;
