import styled from 'styled-components';
import React, { FC, FormHTMLAttributes } from 'react';

export const Form: FC<FormProps> = ({ children, ...all }) => {
    return <FormStyled {...all} >{children}</FormStyled>;
};

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    width?: number
}

const FormStyled = styled.form<FormProps>`
    width: ${props => props.width ? props.width + 'px' : 'auto'};
`;
