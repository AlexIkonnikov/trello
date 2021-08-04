import React, { FC, useState } from 'react';
import { Input } from '../../ui/Input';
import { TaskList } from '../TaskList';
import { Col } from './../../ui/Column';
import { LocalStorage } from './../../services/LocalStorage';

interface ColumnProps {
    nameOfColumn: string;
    author: string;
    index: number;
}

const Column: FC<ColumnProps> = ({ nameOfColumn, author, index }) => {
    const [columnName, changeName] = useState(LocalStorage.getStringifyData(`columnName-${index}`, nameOfColumn));

    const [isInputDisabled, setInputState] = useState(true);

    const onChangeName = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        LocalStorage.set(`columnName-${index}`, target.value);
        changeName(target.value);
    };

    const onSetInputState = (): void => {
        setInputState(!isInputDisabled);
        if (columnName === '') {
            changeName(nameOfColumn);
        }
    };

    return (
        <Col>
            <Input
                value={columnName}
                onChange={onChangeName}
                onFocus={onSetInputState}
                onBlur={onSetInputState}
                readOnly={isInputDisabled}
            />
            <TaskList userName={author} columnName={columnName} index={index} />
        </Col>
    );
};

export default Column;
