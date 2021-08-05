import React, { FC, useState } from 'react';
import { Task, ITask } from '../Task';
import { v4 as uuidv4 } from 'uuid';
import { TextForm } from '../TextForm';
import { LocalStorage } from '../../services/LocalStorage';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addTask, deleteTask, updateTask } from '../../redux/ducks/tasks';

interface TaskListProps {
    userName: string;
    columnName: string;
}

const TaskList: FC<TaskListProps> = ({ userName, columnName }) => {

    const dispatch = useAppDispatch();
    const tasks = useAppSelector((state) => state.task.tasks);

    const onAddTask = (title: string): void => {
        const newTask = { id: uuidv4(), author: userName, title, description: '', comments: [] };
        dispatch(addTask(newTask));//
    };

    const onUpdateTask = (task: ITask): void => {
        dispatch(updateTask(task));
    };

    const onDeleteTask = (id: string): void => {
        dispatch(deleteTask(id));
    };

    return (
        <React.Fragment>
            {tasks.map((task) => {
                return (
                    <React.Fragment key={task.id}>
                        <Task
                            userName={userName}
                            task={task}
                            updateTask={onUpdateTask}
                            deleteTask={onDeleteTask}
                            columnName={columnName}
                        />
                    </React.Fragment>
                );
            })}
            <TextForm submit={onAddTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </React.Fragment>
    );
};

export default TaskList;
