import React, {FC, HTMLAttributes} from 'react';
import styled, { CSSProp } from 'styled-components';

export const List: FC<HTMLAttributes<HTMLUListElement>> = ({children, ...outerProps}) => {
    return (
        <ListItem {...outerProps}>
            {children}
        </ListItem>
    );
};

interface ListProps {
  containerStyles?: CSSProp
}

const ListItem = styled.ul<ListProps>`
    ${props => props.containerStyles ?? ''};
`;

