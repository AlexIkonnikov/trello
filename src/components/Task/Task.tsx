import React, { FC } from 'react';
import { useState } from 'react';
import { ITask } from '../../redux/ducks/tasks';
import { Card } from '../../ui/Card';
import { TaskPopup } from '../TaskPopup';

type TaskProps = {
    task: ITask;
};

const Task: FC<TaskProps> = ({task}) => {
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
                    task={task}
                    closePopup={closePopup}
                />
            )}
        </React.Fragment>
    );
};
export default Task;
