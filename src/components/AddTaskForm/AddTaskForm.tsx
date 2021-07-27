import React, { useState } from 'react';
import { Textarea } from '../../utils/Textarea';

interface Props {
    submit: (title: string) => void;
}

function AddTaskForm({ submit }: Props): JSX.Element {
    const [state, setState] = useState({title: '', isButtonShow: false});

    const onTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setState({...state, title: event.target.value});
    };

    const onSubmitForm = (event: React.FormEvent) => {
        event.preventDefault();
        submit(state.title);
        setState({...state, title: '',  isButtonShow: false});
    };

    return (
        <form onSubmit={onSubmitForm}>
            <Textarea
                onFocus={() => {setState({...state, isButtonShow: true})}}
                className="form-control mb-2"
                placeholder="Write your task title.."
                value={state.title}
                onChange={onTitleChange}
                rows={2}
            />
            {state.isButtonShow && <button className="btn btn-primary btn-sm ms-auto d-block" disabled={state.title.length === 0} >Add new task</button>}
        </form>
    );
}

export default AddTaskForm;
