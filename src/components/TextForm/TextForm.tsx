import React, { useState } from 'react';
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
        <form onSubmit={onSubmitForm}>
            <Textarea
                className="form-control mb-2"
                placeholder={inputPlaceholder}
                value={state.title}
                onChange={onTitleChange}
                rows={2}
            />
            <button className="btn btn-success btn-sm ms-auto d-block" disabled={state.title.length === 0}>
                {buttonText}
            </button>
        </form>
    );
}

export default TextForm;
