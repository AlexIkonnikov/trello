import React, { useState, useReducer } from 'react';
import Task, { ITask } from '../Task/Task';

interface Props {
    name: string;
}

type InitialStateType = {
    tasks: Array<ITask>;
    isInputDisabled: boolean;
};

const initialState: InitialStateType = {
    tasks: [],
    isInputDisabled: true,
};

type ActionType = {
    type: 'ADD_TASK' | 'CHANGE_INPUT_STATE';
    payload?: ITask;
};

const reducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'ADD_TASK':
            if (action.payload) {
                return { ...state, tasks: [...state.tasks, action.payload] };
            } else {
                return { ...state };
            }
        case 'CHANGE_INPUT_STATE':
            return { ...state, isInputDisabled: !state.isInputDisabled };
        default:
            return state;
    };
};

function Column({ name }: Props): JSX.Element {
    const [columnName, changeName] = useState(name);
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeName = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        changeName(evt.target.value);
    };

    const onChangeInputState = (): void => {
        dispatch({ type: 'CHANGE_INPUT_STATE' });
    };

    return (
        <React.Fragment>
            <div className="col-auto">
                <div className="text-center">
                    <button className="btn btn-success mb-2">+</button>
                </div>
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
                            className="btn btn-primary"
                            onClick={onChangeInputState}
                            disabled={columnName.length === 0}
                        >
                            save
                        </button>
                    </div>
                )}
                {state.tasks &&
                    state.tasks.map((task) => {
                        return (
                            <Task
                                author={task.author}
                                title={task.title}
                                description={task.description}
                                key={task.title}
                            />
                        );
                    })}
            </div>
        </React.Fragment>
    );
}

export default Column;
