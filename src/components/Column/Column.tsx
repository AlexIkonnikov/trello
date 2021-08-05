import React, { FC } from 'react';
import { changeColumnName, IColumn } from '../../redux/ducks/column';
import { useAppDispatch } from '../../redux/hook';
import { Input } from '../../ui/Input';
import { TaskList } from '../TaskList';
import { Col } from './../../ui/Column';

interface ColumnProps {
    column: IColumn;
    author: string;
}

const Column: FC<ColumnProps> = ({ column, author }) => {

    const dispatch = useAppDispatch();

    const onChangeName = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(changeColumnName({id: column.id + '', name: target.value}));
    };

    return (
        <Col>
            <Input
                value={column.name}
                onChange={onChangeName}
            />
            <TaskList userName={author} columnName={column.name} />
        </Col>
    );
};

export default Column;
