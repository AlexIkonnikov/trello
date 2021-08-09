import React, { FC, useEffect } from 'react';
import { Form as CustomForm } from './../../ui/Form';
import { CommentList } from './../CommentList';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Row } from '../../ui/Row';
import { Popup } from '../../ui/Popup';
import { Form, Field } from 'react-final-form';
import { addComment, deleteTask, ITask, updateTask } from '../../redux/ducks/tasks';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { TextForm } from '../TextForm';
import { v4 as uuidv4 } from 'uuid';
import { selectUserName } from '../../redux/ducks/user';
import { selectColumnNameById } from '../../redux/ducks/column';

type TaskPopupProps = {
    task: ITask;
    closePopup: () => void;
};

interface FormValues {
    title: string;
    description: string;
}

const TaskPopup: FC<TaskPopupProps> = ({ task, closePopup }) => {
    const dispatch = useAppDispatch();

    const columnName = useAppSelector(selectColumnNameById(task.column_id));
    const currentUser = useAppSelector(selectUserName);

    useEffect(() => {
        document.addEventListener('keydown', onCloseModal);
        return () => {
            document.removeEventListener('keydown', onCloseModal);
        };
    }, []);

    const onCloseModal = ({ key }: KeyboardEvent): void => {
        if (key === 'Escape') {
            closePopup();
        }
    };

    const onSaveTask = (values: FormValues): void => {
        dispatch(
            updateTask({
                id: task.id,
                column_id: task.column_id,
                author: task.author,
                title: values.title,
                description: values.description,
                comments: task.comments,
            }),
        );
        closePopup();
    };

    const onDeleteTask = () => {
        dispatch(deleteTask(task.id));
        closePopup();
    };

    const onAddCommentHandler = (message: string): void => {
        dispatch(addComment({ task_id: task.id, id: uuidv4(), author: currentUser, text: message }));
    };

    return (
        <Popup onClose={closePopup}>
            <Input
                type="text"
                label="Author:"
                name="author"
                value={task.author}
                placeholder={'Author is: ' + task.author}
                readOnly={true}
            />
            <Input type="text" label="Column name:" name="column" value={columnName} readOnly={true} />
            <Form onSubmit={onSaveTask} initialValues={{ title: task.title, description: task.description }}>
                {({ handleSubmit, values }) => (
                    <CustomForm onSubmit={handleSubmit} width={400}>
                        <Field name="title">
                            {({ input }) => <Input {...input} type="text" label="Title: " placeholder="Title.." />}
                        </Field>
                        <Field name="description">
                            {({ input }) => (
                                <Input {...input} type="text" label="Description: " placeholder="Description..." />
                            )}
                        </Field>
                        <Row justifyContent="flex-end">
                            <Button type="submit" text="save" disabled={!values.title} css="margin-right: 10px;" />
                            <Button type="button" text="delete" view="danger" onClick={onDeleteTask} />
                        </Row>
                    </CustomForm>
                )}
            </Form>
            <CommentList comments={task.comments} taskId={task.id} />
            <TextForm submit={onAddCommentHandler} inputPlaceholder="Write your comment" buttonText="Add comment" />
        </Popup>
    );
};

export default TaskPopup;
