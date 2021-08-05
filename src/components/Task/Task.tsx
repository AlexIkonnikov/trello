import React, { FC } from 'react';
import { useState } from 'react';
import { ITask } from '../../redux/ducks/tasks';
import { Card } from '../../ui/Card';
import { TaskPopup } from '../TaskPopup';

type TaskProps = {
    userName: string;
    task: ITask;
    columnName: string;
};

const Task: FC<TaskProps> = ({ task, columnName, userName }) => {
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
                />
            )}
        </React.Fragment>
    );
};
export default Task;
