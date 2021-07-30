import React, { FC } from 'react';
import styled, { CSSProp } from 'styled-components';

export const Text: FC<TextProps> = ({children, ...all}) => {
    return <StyledText {...all}>{children}</StyledText>;
}

interface TextProps {
    color?: string
    fs?: number
    css?: CSSProp
}

const StyledText = styled.p<TextProps>`
    font-size: ${props => (props.fs ?  props.fs + 'px' : '14px')};
    font-weight: 500;
    color: ${props => props.color || 'black'};
    ${props => props.css}
`;
