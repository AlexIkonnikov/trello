import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import Tasks from '../Tasks/Tasks';
import {Col} from './../../ui/Column';

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
        <Col>
            <form onSubmit={onChangeInputState}>
                <Input
                    value={columnName}
                    onChange={onChangeName}
                    onClick={() => {
                        setInputState(false);
                    }}
                    onBlur={() => {
                      setInputState(true);
                  }}
                    readOnly={isInputDisabled}
                />
            </form>
            <Tasks userName={author} columnName={columnName} index={index} />
        </Col>
    );
}

export default Column;
