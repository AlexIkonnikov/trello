import React, {FC} from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const Popup: FC<PopupProps> = ({children, onClose}) => {
    return (
        <Overlay>
            <Background>
              {onClose ? <Button text="x" css="margin-left: auto;" onClick={onClose} /> : null}
              {children}
            </Background>
        </Overlay>
    );
};

interface PopupProps {
  onClose?: () => void
}

const Overlay = styled.div`
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

const Background = styled.div`
    background: rgb(235, 236, 240);
    width: auto;
    border-radius: 5px;
    padding: 10px;
`;

