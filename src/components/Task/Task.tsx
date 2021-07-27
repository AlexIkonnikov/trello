import React from 'react';
import { useState } from 'react';
import { IComment } from '../Comments/Comments';
import TaskPopup from '../TaskPopup/TaskPopup';

export interface ITask {
    id: string
    author: string
    title: string
    description: string
    comments: Array<IComment>
}

type Props = {
    userName: string
    task: ITask;
    columnName: string
    updateTask: (task: ITask) => void
    deleteTask: (id: string) => void
};

function Task({ task, updateTask, deleteTask, columnName, userName }: Props): JSX.Element {
    const [popupIsVisible, setPopupState] = useState(false);

    return (
        <React.Fragment>
            <section className="card mb-3" onClick={() => setPopupState(true)}>
                <div className="card-body p-2">
                    <h5 className="card-title">{task.author}</h5>
                    <p className="card-title">{task.title}</p>
                    {task.comments.length > 0 && <div>Comments: {task.comments.length}</div>}
                </div>
            </section>
            {popupIsVisible && (
                <TaskPopup
                    currentUser={userName}
                    task={task}
                    columnName={columnName}
                    closePopup={() => setPopupState(false)}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            )}
        </React.Fragment>
    );
}
export default Task;
