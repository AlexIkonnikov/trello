import React, { FC } from 'react';
import { changeColumnName, IColumn } from '../../redux/ducks/column';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { addTask, tasksForColumnSelector } from '../../redux/ducks/tasks';
import { Input } from '../../ui/Input';
import { TaskList } from '../TaskList';
import { Col } from './../../ui/Column';
import { TextForm } from '../TextForm';
import { v4 as uuidv4 } from 'uuid';
import { Field, Form, FormSpy, FormProps } from 'react-final-form';
import { Form as CustomForm } from './../../ui/Form';

interface ColumnProps {
    column: IColumn;
    author: string;
}

const Column: FC<ColumnProps> = ({ column, author }) => {
    const dispatch = useAppDispatch();

    const tasks = useAppSelector(tasksForColumnSelector(column.id));

    const onChangeName = (values: FormProps): void => {
        dispatch(changeColumnName({ id: column.id, name: values.name }));
    };

    const onAddTask = (title: string): void => {
        const newTask = { id: uuidv4(), column_id: column.id, author: author, title, description: '', comments: [] };
        dispatch(addTask(newTask));
    };

    return (
        <Col>
            <Form onSubmit={onChangeName} initialValues={{name: column.name}}>
                {({ handleSubmit }) => (
                    <CustomForm onSubmit={handleSubmit}>
                        <Field name="name">{({input}) =>
                          <FormSpy>
                              {({form}) => (
                                <Input {...input} onBlur={form.submit} />
                              )}
                          </FormSpy>
                        }
                        </Field>
                    </CustomForm>
                )}
            </Form>
            <TaskList tasks={tasks} />
            <TextForm submit={onAddTask} inputPlaceholder="Write your task title.." buttonText="Add task" />
        </Col>
    );
};

export default Column;
