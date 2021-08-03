import styled from 'styled-components';
import React, { FC, FormHTMLAttributes } from 'react';

export const Form: FC<FormProps> = ({ children, ...outerProps }) => {
    return <FormStyled {...outerProps} >{children}</FormStyled>;
};

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    width?: number
}

const FormStyled = styled.form<FormProps>`
    min-width: ${props => props.width ? props.width + 'px' : 'auto'};
`;
