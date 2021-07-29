import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { Textarea } from '../../ui/Textarea';

interface Props {
    submit: (title: string) => void;
    buttonText: string;
    inputPlaceholder: string;
}

function TextForm({ submit, inputPlaceholder, buttonText }: Props): JSX.Element {
    const [state, setState] = useState({ title: '' });

    const onTitleChange = ({ target }: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setState({ ...state, title: target.value });
    };

    const onSubmitForm = (evt: React.FormEvent) => {
        evt.preventDefault();
        submit(state.title);
        setState({ ...state, title: '' });
    };

    return (
        <Form onSubmit={onSubmitForm}>
            <Textarea placeholder={inputPlaceholder} value={state.title} onChange={onTitleChange} />
            <Button text={buttonText} type="submit" disabled={state.title.length === 0} />
        </Form>
    );
}

export default TextForm;
