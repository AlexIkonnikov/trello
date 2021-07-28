import React, { useState } from 'react';
import Tasks from '../Tasks/Tasks';

interface Props {
    nameOfColumn: string;
    author: string;
    index: number;
}

function Column({ nameOfColumn, author, index }: Props): JSX.Element {
    const checkLocalStorage = (): string => {
        const columnName = localStorage.getItem(`columnName-${index}`);
        if (columnName !== null) {
            return columnName;
        } else {
            return nameOfColumn;
        }
    };

    const [columnName, changeName] = useState(checkLocalStorage);

    const [isInputDisabled, setInputState] = useState(true);

    const onChangeName = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        localStorage.setItem(`columnName-${index}`, target.value);
        changeName(target.value);
    };

    const onChangeInputState = (evt: React.FormEvent): void => {
        evt.preventDefault();
        setInputState(true);
    };

    return (
        <div className="col mb-3">
            <div style={{ background: '#ebecf0', borderRadius: '5px', padding: '10px' }}>
                <form onSubmit={onChangeInputState}>
                    <input
                        className="form-control mb-2"
                        type="text"
                        readOnly={isInputDisabled}
                        value={columnName}
                        onDoubleClick={() => {
                            setInputState(false);
                        }}
                        onChange={onChangeName}
                    />
                    {!isInputDisabled && (
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
                <Tasks userName={author} columnName={columnName} index={index} />
            </div>
        </div>
    );
}

export default Column;
