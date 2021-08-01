import React, { FC, useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Form } from '../../ui/Form';
import { Popup } from '../../ui/Popup';

interface UserPopupProps {
    setName: (name: string) => void;
}

const UserPopup: FC<UserPopupProps> = ({ setName }) => {
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
            <Popup>
                <Form onSubmit={onSetName}>
                    <Input name="name" label="Please, write your name: " value={userName} onChange={onChangeName} />
                    <Button text="send" type="submit" disabled={userName.length === 0} css="margin-left: auto;" />
                </Form>
            </Popup>
        );
    } else {
        return null;
    }
};

export default UserPopup;
