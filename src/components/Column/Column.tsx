import React, { FC } from 'react';
import { changeColumnName, IColumn } from '../../redux/ducks/column';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addTask } from '../../redux/ducks/tasks';
import { Input } from '../../ui/Input';
import { TaskList } from '../TaskList';
import { Col } from './../../ui/Column';
import { TextForm } from '../TextForm';
import { v4 as uuidv4 } from 'uuid';

interface ColumnProps {
    column: IColumn;
    author: string;
}

const Column: FC<ColumnProps> = ({ column, author }) => {
    const dispatch = useAppDispatch();

    const tasks = useAppSelector((state) => state.tasks.filter((task) => task.column_id === column.id))

    const onChangeName = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(changeColumnName({ id: column.id, name: target.value }));
    };

    const onAddTask = (title: string): void => {
        const newTask = { id: uuidv4(), column_id: column.id, author: author, title, description: '', comments: [] };
        dispatch(addTask(newTask));
    };

    return (
        <Col>
            <Input value={column.name} onChange={onChangeName} />
            <TaskList tasks={tasks} />
            <TextForm submit={onAddTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </Col>
    );
};

export default Column;
