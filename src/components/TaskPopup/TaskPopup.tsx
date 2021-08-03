import React, { FC, useEffect, useState } from 'react';
import { ITask } from './../Task/Task';
import { Form as CustomForm } from './../../ui/Form';
import { CommentList, IComment } from './../CommentList';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Row } from '../../ui/Row';
import { Popup } from '../../ui/Popup';
import { Form, Field, useField } from 'react-final-form';

type TaskPopupProps = {
    currentUser: string;
    task: ITask;
    columnName: string;
    closePopup: () => void;
    updateTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
};

interface FormValues {
  title: string
  description: string
}

const TaskPopup: FC<TaskPopupProps> = ({ task, columnName, closePopup, updateTask, deleteTask, currentUser }) => {
    const [commentState, setCommentState] = useState(task.comments);

    useEffect(() => {
        updateTask({
            id: task.id,
            author: task.author,
            title: task.title,
            description: task.description,
            comments: commentState,
        });
        document.addEventListener('keydown', onCloseModal);
        return () => {
            document.removeEventListener('keydown', onCloseModal);
        };
    }, [commentState]);

    const onCloseModal = ({ key }: KeyboardEvent): void => {
        if (key === 'Escape') {
            closePopup();
        }
    };

    const onSaveTask = (values: FormValues): void => {
        updateTask({
            id: task.id,
            author: task.author,
            title: values.title,
            description: values.description,
            comments: commentState,
        });
        closePopup();
    };

    const onDeleteTask = () => {
        deleteTask(task.id);
        closePopup();
    };

    const onAddCommentHandler = (comment: IComment): void => {
        setCommentState([...commentState, comment]);
    };

    const onUpdateCommentHandler = (newComment: IComment): void => {
        setCommentState([
            ...commentState.map((comment) => {
                return comment.id === newComment.id ? newComment : comment;
            }),
        ]);
    };

    const onDeleteCommentHandler = (id: string) => {
        setCommentState([...commentState.filter((comment) => comment.id !== id)]);
    };

    return (
        <Popup onClose={closePopup}>
            <Form onSubmit={onSaveTask} initialValues={{title: task.title, description: task.description}}>
                {({ handleSubmit }) => (
                    <CustomForm onSubmit={handleSubmit} width={400}>
                        <Input
                            type="text"
                            label="Author:"
                            name="author"
                            value={task.author}
                            placeholder={'Author is: ' + task.author}
                            readOnly={true}
                        />
                        <Input type="text" label="Column name:" name="column" value={columnName} readOnly={true} />
                        <Field name="title">
                            {({ input }) => <Input {...input} type="text" label="Title: " placeholder="Title.." />}
                        </Field>
                        <Field name="description">
                            {({ input }) => (
                                <Input {...input} type="text" label="Description: " placeholder="Description..." />
                            )}
                        </Field>
                        <Row justifyContent="flex-end">
                            <Button type="submit" text="save" disabled={false} css="margin-right: 10px;" />
                            <Button type="button" text="delete" view="danger" onClick={onDeleteTask} />
                        </Row>
                    </CustomForm>
                )}
            </Form>
            <CommentList
                comments={commentState}
                addComment={onAddCommentHandler}
                deleteComment={onDeleteCommentHandler}
                currentUser={currentUser}
                updateComment={onUpdateCommentHandler}
            />
        </Popup>
    );
};

export default TaskPopup;
