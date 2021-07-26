import React, { useState, useReducer } from 'react';
import Task, { ITask } from '../Task/Task';
import AddTaskForm from './../AddTaskForm/AddTaskForm';
import TaskPopup from './../TaskPopup/TaskPopup';

interface Props {
    name: string;
    author: string;
}

type InitialStateType = {
    tasks: Array<ITask>;
    isInputDisabled: boolean;
    isPopUpShow: boolean;
};

const initialState: InitialStateType = {
    tasks: [{
        author: 'Alex',
        title: 'New Task',
        description: 'Buy bear',
        comments:['Whats problem?', 'go money']
      }
    ],
    isInputDisabled: true,
    isPopUpShow: false,
};

type ActionType = {
    type: 'ADD_TASK' | 'DELETE_TASK' | 'UPDATE_TASK' | 'CHANGE_INPUT_STATE' | 'CHANGE_POPUP_STATE';
    payload?: ITask;
};

const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_TASK':
            return action.payload ? { ...state, tasks: [...state.tasks, action.payload] } : { ...state };
        case 'CHANGE_INPUT_STATE':
            return { ...state, isInputDisabled: !state.isInputDisabled };
        case 'CHANGE_POPUP_STATE':
            return { ...state, isPopUpShow: !state.isPopUpShow };
        default:
            return state;
    }
};

function Column({ name, author }: Props): JSX.Element {
    const [columnName, changeName] = useState(name);
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        changeName(evt.target.value);
    };

    const onChangeInputState = (evt: React.FormEvent): void => {
        evt.preventDefault();
        dispatch({ type: 'CHANGE_INPUT_STATE' });
    };

    const addTask = (title: string): void => {
        dispatch({ type: 'ADD_TASK', payload: { author: author, title } });
    };

    const togglePopup = (): void => {
        dispatch({ type: 'CHANGE_POPUP_STATE' });
    };

    return (
        <div className="col-auto">
            <div style={{ background: '#ebecf0', borderRadius: '5px', padding: '10px' }}>
                <form onSubmit={onChangeInputState}>
                    <input
                        className="text-center mb-2"
                        type="text"
                        readOnly={state.isInputDisabled}
                        value={columnName}
                        onDoubleClick={onChangeInputState}
                        onChange={onChangeName}
                    />
                    {!state.isInputDisabled && (
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-success btn-sm mb-2"
                                disabled={columnName.length === 0}
                            >
                                Save
                            </button>
                        </div>
                    )}
                </form>
                {state.tasks &&
                    state.tasks.map((task) => {
                        return (
                            <React.Fragment key={task.title}>
                                <Task task={task} showPopup={togglePopup} />
                                {state.isPopUpShow && <TaskPopup task={task} name={columnName} closePopup={togglePopup} />}
                            </React.Fragment>
                        );
                    })}
                <AddTaskForm submit={addTask} />
            </div>
        </div>
    );
}

export default Column;
