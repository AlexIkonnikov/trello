import React, { FC, useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Form as CustomForm } from '../../ui/Form';
import { Popup } from '../../ui/Popup';
import { Form, Field, FormProps} from 'react-final-form';

interface UserPopupProps {
    setName: (name: string) => void;
}

const UserPopup: FC<UserPopupProps> = ({ setName }) => {
    const [visible, setVisible] = useState(true);

    const onSetName = (values: FormProps): void => {
        setName(values.userName);
        setVisible(false);
    };

    if (visible) {
        return (
            <Form onSubmit={onSetName}>
                {({handleSubmit, pristine}) => (
                    <Popup>
                        <CustomForm onSubmit={handleSubmit}>
                            <Field name="userName">
                                {({input}) => (
                                    <Input
                                        {...input}
                                        label="Please, write your name: "
                                    />
                                )}
                            </Field>
                            <Button
                                text="send"
                                type="submit"
                                disabled={pristine}
                                css="margin-left: auto;"
                            />
                        </CustomForm>
                    </Popup>
                )}
            </Form>
        );
    } else {
        return null;
    }
};

export default UserPopup;
