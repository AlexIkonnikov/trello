import React, {FC} from 'react';
import { Overlay } from './Overlay';
import { Background } from './Background';
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
