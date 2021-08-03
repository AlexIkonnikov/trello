import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';

export const Row: FC<FlexBoxProps> = ({children, ...outerProps}) => {
    return (
        <FlexContainer {...outerProps}>
            {children}
        </FlexContainer>
    );
};

interface FlexBoxProps extends  HTMLAttributes<HTMLElement>{
    justifyContent?: 'start' | 'space-between' | 'space-around'| 'flex-end'
    alignItems?: 'flex-start' | 'flex-end' | 'center'
}

const FlexContainer = styled.div<FlexBoxProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.justifyContent || 'start'};
    align-items: ${props => props.alignItems || 'center'};
    flex-wrap: wrap;
`;


