import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Input: FC<TextInputProps> = ({ name, label, ...rest}) => {
    if (name && label) {
        return (
            <React.Fragment>
                <Label htmlFor={name}>{label}</Label>
                <StyledInput id={name} name={name} {...rest} />
            </React.Fragment>
        );
    }
    return <StyledInput {...rest} />;
};

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    label?: string;
}

const StyledInput = styled.input`
    width: 100%;
    display: block;
    margin-bottom: 10px;
    padding: 5px;
    color: black;
    background-color: white;
    border: 1px solid #ced4da;
    border-radius: 5px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(15, 115, 255, 0.2);
    }
`;

const Label = styled.label`
    display: inline-block;
    margin-bottom: 10px;
`;
