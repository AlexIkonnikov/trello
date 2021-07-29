import React from 'react';
import { useState } from 'react';
import { Card } from '../../ui/Card';
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
            <Card author={task.author} title={task.title} commentCount={task.comments.length} onClick={() => setPopupState(true)} />
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
