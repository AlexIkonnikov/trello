import styled from 'styled-components';
import React, {FC, HTMLAttributes} from 'react';

export const Overlay: FC<HTMLAttributes<HTMLElement>> = ({ children,...all }) => {
    return (
        <StyledOverlay {...all}>
            {children}
        </StyledOverlay>
    );
};


const StyledOverlay = styled.div`
    background: rgba(1, 1, 1, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
`;
