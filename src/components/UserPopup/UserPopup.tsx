import React, { useState } from 'react';
import { Overlay } from './../../utils/Overlay';
import { Form } from './../../utils/Form';

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
                <Form onSubmit={onSetName}>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder="What is your name?"
                            value={userName}
                            onChange={onChangeName}
                            className="form-control"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={userName.length === 0}>
                        Send
                    </button>
                </Form>
            </Overlay>
        );
    } else {
        return null;
    }
}

export default UserPopup;
