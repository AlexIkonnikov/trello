import React, { FC } from 'react';
import { Task } from '../Task';
import { v4 as uuidv4 } from 'uuid';
import { TextForm } from '../TextForm';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addTask } from '../../redux/ducks/tasks';
import { IColumn } from '../../redux/ducks/column';


interface TaskListProps {
    userName: string;
    column: IColumn;
}

const TaskList: FC<TaskListProps> = ({ userName, column }) => {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.task.tasks.filter((task) => task.column_id === column.id));

    const onAddTask = (title: string): void => {
        const newTask = { id: uuidv4(), column_id: column.id ,author: userName, title, description: '', comments: [] };
        dispatch(addTask(newTask));
    };

    return (
        <React.Fragment>
            {tasks.map((task) => {
                return (
                    <React.Fragment key={task.id}>
                        <Task
                            userName={userName}
                            task={task}
                            columnName={column.name}
                        />
                    </React.Fragment>
                );
            })}
            <TextForm submit={onAddTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </React.Fragment>
    );
};

export default TaskList;
