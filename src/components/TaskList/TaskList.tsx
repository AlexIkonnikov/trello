import React, { FC } from 'react';
import { Task } from '../Task';
import { ITask } from '../../redux/tasks';


interface TaskListProps {
    tasks: Array<ITask>;
}

const TaskList: FC<TaskListProps> = ({ tasks }) => {

    return (
        <React.Fragment>
            {tasks.map((task) => {
                return (
                    <React.Fragment key={task.id}>
                        <Task task={task} />
                    </React.Fragment>
                );
            })}
        </React.Fragment>
    );
};

export default TaskList;
