import React, { useState } from 'react';
import { Overlay } from '../../ui/Overlay';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Form } from '../../ui/Form';
import { Background } from '../../ui/Background';

interface Props {
    setName: (name: string) => void;
}

function UserPopup({ setName }: Props): JSX.Element | null {
    const [userName, setUserName] = useState('');
    const [visible, setVisible] = useState(true);

    const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(evt.target.value);
    };

    const onSetName = (evt: React.FormEvent): void => {
        evt.preventDefault();
        setName(userName);
        setVisible(false);
    };

    if (visible) {
        return (
            <Overlay>
                <Background>
                    <Form onSubmit={onSetName}>
                        <Input name="name" label="Name: " value={userName} onChange={onChangeName} />
                        <Button text="send" type="submit" disabled={userName.length === 0} />
                    </Form>
                </Background>
            </Overlay>
        );
    } else {
        return null;
    }
}

export default UserPopup;
