import React from 'react';
import { Overlay } from './../../utils/Overlay';
import { Form } from './../../utils/Form';
import { ITask } from './../Task/Task';

type Props = {
    task: ITask;
    name: string;
    closePopup: () => void;
};

function TaskPopup({ task, name, closePopup }: Props): JSX.Element {
    return (
        <Overlay
            onClick={() => {
                closePopup();
            }}
        >
            <Form>
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder={'Author is: ' + task.author}
                        readOnly={true}
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <input type="text" placeholder={name} readOnly={true} className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" value={task.title} placeholder="title" className="form-control" />
                </div>
                <div className="mb-3">
                    <input type="text" value={task.description} placeholder="description" className="form-control" />
                </div>
                <button className="btn btn-primary" type="submit">
                    Send
                </button>
                <ul style={{listStyleType: 'none'}}>
                    {task.comments &&
                        task.comments.map((comment) => {
                            return <li key="comment">{task.author}: {comment}</li>;
                        })
                    }
                </ul>
            </Form>
        </Overlay>
    );
}

export default TaskPopup;
