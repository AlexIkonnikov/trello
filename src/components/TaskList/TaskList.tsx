import React, { FC, useState } from 'react';
import { Task, ITask } from '../Task';
import { v4 as uuidv4 } from 'uuid';
import { TextForm } from '../TextForm';
import { LocalStorage } from '../../services/LocalStorage';

interface TaskListProps {
    userName: string;
    columnName: string;
    index: number;
}

type InitialStateType = {
    tasks: Array<ITask>;
};

const initialState: InitialStateType = {
    tasks: [],
};

const TaskList: FC<TaskListProps> = ({ userName, columnName, index }) => {
    const checkLocalStorage = (): InitialStateType => {
        const tasks = LocalStorage.getStringifyData(`column-data-${index}`, JSON.stringify(initialState));
        return JSON.parse(tasks);
    };

    const [state, setState] = useState(checkLocalStorage());

    const setNewState = (newState: InitialStateType): void => {
        LocalStorage.set(`column-data-${index}`, JSON.stringify(newState));
        setState(newState);
    };

    const addTask = (title: string): void => {
        const newTask = { id: uuidv4(), author: userName, title, description: '', comments: [] };
        setNewState({...state, tasks: [...state.tasks, newTask]});
    };

    const updateTask = (task: ITask): void => {
        setNewState({...state, tasks: state.tasks.map((it) => (it.id === task.id ? task : it))});
    };

    const deleteTask = (id: string): void => {
        setNewState({...state, tasks: state.tasks.filter((it) => it.id !== id)});
    };

    return (
        <React.Fragment>
            {state.tasks.map((task) => {
                return (
                    <React.Fragment key={task.id}>
                        <Task
                            userName={userName}
                            task={task}
                            updateTask={updateTask}
                            deleteTask={deleteTask}
                            columnName={columnName}
                        />
                    </React.Fragment>
                );
            })}
            <TextForm submit={addTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </React.Fragment>
    );
};

export default TaskList;
