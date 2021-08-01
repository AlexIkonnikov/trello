import React, { FC } from 'react';
import { useState } from 'react';
import { Card } from '../../ui/Card';
import { IComment } from '../CommentList';
import { TaskPopup } from '../TaskPopup';

export interface ITask {
    id: string;
    author: string;
    title: string;
    description: string;
    comments: Array<IComment>;
}

type TaskProps = {
    userName: string;
    task: ITask;
    columnName: string;
    updateTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
};

const Task: FC<TaskProps> = ({ task, updateTask, deleteTask, columnName, userName }) => {
    const [popupIsVisible, setPopupState] = useState(false);

    const openPopup = (): void => {
        setPopupState(true);
    };

    const closePopup = (): void => {
        setPopupState(false);
    };

    return (
        <React.Fragment>
            <Card author={task.author} title={task.title} commentCount={task.comments.length} onClick={openPopup} />
            {popupIsVisible && (
                <TaskPopup
                    currentUser={userName}
                    task={task}
                    columnName={columnName}
                    closePopup={closePopup}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                />
            )}
        </React.Fragment>
    );
};
export default Task;
