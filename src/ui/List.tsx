import React, {FC, HTMLAttributes} from 'react';
import styled from 'styled-components';

export const List: FC<HTMLAttributes<HTMLUListElement>> = ({children}) => {
    return (
        <ListItem>
            {children}
        </ListItem>
    );
};

const ListItem = styled.ul`
    list-style-type: none;
    margin-bottom: 10px;
`;

