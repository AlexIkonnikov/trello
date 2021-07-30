import React, { FC, useState } from 'react';
import { Form } from '../../ui/Form';
import { Input } from '../../ui/Input';
import { TaskList } from '../TaskList';
import { Col } from './../../ui/Column';
import { LS } from './../../services/LocalStorage';

interface ColumnProps {
    nameOfColumn: string
    author: string
    index: number
}

const Column: FC<ColumnProps> = ({ nameOfColumn, author, index }) => {

    const [columnName, changeName] = useState(LS.getPlainString(`columnName-${index}`, nameOfColumn));

    const [isInputDisabled, setInputState] = useState(true);

    const onChangeName = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        LS.set(`columnName-${index}`, target.value);
        changeName(target.value);
    };

    const onChangeInputState = (evt: React.FormEvent): void => {
        evt.preventDefault();
        setInputState(true);
    };

    const onSetInputState = (): void => {
        setInputState(!isInputDisabled);
        if (columnName === '') {
          changeName(nameOfColumn);
        }
    };

    return (
        <Col>
            <Form onSubmit={onChangeInputState}>
                <Input
                    value={columnName}
                    onChange={onChangeName}
                    onFocus={onSetInputState}
                    onBlur={onSetInputState}
                    readOnly={isInputDisabled}
                />
            </Form>
            <TaskList userName={author} columnName={columnName} index={index} />
        </Col>
    );
}

export default Column;
