import React, { FC, useState } from 'react';
import { Task, ITask } from '../Task';
import { v4 as uuidv4 } from 'uuid';
import { TextForm } from '../TextForm';
import { LS } from '../../services/LocalStorage';

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
        const data = LS.get(`column-data-${index}`);
        if (data !== undefined) {
            return JSON.parse(data);
        } else {
            return initialState;
        }
    };

    const [state, setState] = useState(checkLocalStorage);

    const addTask = (title: string): void => {
        const newTask = { id: uuidv4(), author: userName, title, description: '', comments: [] };
        LS.set(`column-data-${index}`, JSON.stringify({ ...state, tasks: [...state.tasks, newTask] }));
        setState({ ...state, tasks: [...state.tasks, newTask] });
    };

    const updateTask = (task: ITask): void => {
        LS.set(
            `column-data-${index}`,
            JSON.stringify({ ...state, tasks: state.tasks.map((it) => (it.id === task.id ? task : it)) }),
        );
        setState({ ...state, tasks: state.tasks.map((it) => (it.id === task.id ? task : it)) });
    };

    const deleteTask = (id: string): void => {
        LS.set(`column-data-${index}`, JSON.stringify({ ...state, tasks: state.tasks.filter((it) => it.id !== id) }));
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
            <TextForm submit={addTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </React.Fragment>
    );
}

export default TaskList;
