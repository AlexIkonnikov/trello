import React, { FC, useState } from 'react';
import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { Textarea } from '../../ui/Textarea';

interface TextFormProps {
    submit: (title: string) => void
    buttonText: string
    inputPlaceholder: string
}

const TextForm: FC<TextFormProps> = ({ submit, inputPlaceholder, buttonText }) => {
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
            <Button text={buttonText} type="submit" disabled={state.title.length === 0} css="margin-left: auto;" />
        </Form>
    );
}

export default TextForm;
