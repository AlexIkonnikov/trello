import React, { useState } from 'react';
import { Textarea } from '../../utils/Textarea';
import { ITask } from './../Task/Task';

interface Props {
    submit: (title: string) => void;
}

function AddTaskForm({ submit }: Props): JSX.Element {
    const [title, setTitle] = useState('');

    const onTitleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setTitle(event.target.value);
    };

    const onSubmitForm = (event: React.FormEvent) => {
        event.preventDefault();
        submit(title);
        setTitle('');
    };

    return (
        <form onSubmit={onSubmitForm}>
            <Textarea
                className="form-control mb-2"
                placeholder="Write your task title.."
                value={title}
                onChange={onTitleChange}
                rows={2}
            />
            <button className="btn btn-primary btn-sm ms-auto d-block" disabled={title.length === 0} >Add new task</button>
        </form>
    );
}

export default AddTaskForm;
