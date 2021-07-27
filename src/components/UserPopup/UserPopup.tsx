import React, { useState } from 'react';
import { Overlay } from './../../utils/Overlay';
import { FormWrapper } from './../../utils/Form';

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
                <FormWrapper>
                    <form onSubmit={onSetName}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name:
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="What is your name?"
                                value={userName}
                                onChange={onChangeName}
                                className="form-control"
                            />
                        </div>

                        <button
                            className="btn btn-secondary ms-auto d-block"
                            type="submit"
                            disabled={userName.length === 0}
                        >
                            Send
                        </button>
                    </form>
                </FormWrapper>
            </Overlay>
        );
    } else {
        return null;
    }
}

export default UserPopup;