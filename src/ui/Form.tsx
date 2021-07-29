import styled from 'styled-components';
import React, { FC, FormHTMLAttributes } from 'react';

export const Form: FC<FormHTMLAttributes<HTMLFormElement>> = ({ children, ...all }) => {
    return <FormStyled {...all} >{children}</FormStyled>;
};

const FormStyled = styled.form``;
