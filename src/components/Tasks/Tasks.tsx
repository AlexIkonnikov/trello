import React, { useState } from 'react';
import AddTaskForm from '../TextForm/TextForm';
import Task, { ITask } from './../Task/Task';
import { v4 as uuidv4 } from 'uuid';

interface Props {
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

function Tasks({ userName, columnName, index }: Props): JSX.Element {
    const checkLocalStorage = (): InitialStateType => {
        const data = localStorage.getItem(`column-data-${index}`);
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return initialState;
        }
    };

    const [state, setState] = useState(checkLocalStorage);

    const addTask = (title: string): void => {
        const newTask = { id: uuidv4(), author: userName, title, description: '', comments: [] };
        localStorage.setItem(`column-data-${index}`, JSON.stringify({ ...state, tasks: [...state.tasks, newTask] }));
        setState({ ...state, tasks: [...state.tasks, newTask] });
    };

    const updateTask = (task: ITask): void => {
        localStorage.setItem(
            `column-data-${index}`,
            JSON.stringify({ ...state, tasks: state.tasks.map((it) => (it.id === task.id ? task : it)) }),
        );
        setState({ ...state, tasks: state.tasks.map((it) => (it.id === task.id ? task : it)) });
    };

    const deleteTask = (id: string): void => {
        localStorage.setItem(
            `column-data-${index}`,
            JSON.stringify({ ...state, tasks: state.tasks.filter((it) => it.id !== id) }),
        );
        setState({ ...state, tasks: state.tasks.filter((it) => it.id !== id) });
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
            <AddTaskForm submit={addTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </React.Fragment>
    );
}

export default Tasks;
