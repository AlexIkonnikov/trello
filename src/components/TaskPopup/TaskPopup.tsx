import React, { FC, useEffect, useState } from 'react';
import { ITask } from './../Task/Task';
import { Form } from './../../ui/Form';
import { CommentList, IComment } from './../CommentList';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Row } from '../../ui/Row';
import { Popup } from '../../ui/Popup';

type TaskPopupProps = {
    currentUser: string;
    task: ITask;
    columnName: string;
    closePopup: () => void;
    updateTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
};

const TaskPopup: FC<TaskPopupProps> = ({ task, columnName, closePopup, updateTask, deleteTask, currentUser }) => {
    const [state, setState] = useState({ ...task });

    useEffect(() => {
        updateTask({
            id: task.id,
            author: task.author,
            title: state.title,
            description: state.description,
            comments: state.comments,
        });
        document.addEventListener('keydown', onCloseModal);
        return () => {
            document.removeEventListener('keydown', onCloseModal);
        };
    }, [state.comments]);

    const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
    };

    const onCloseModal = ({ key }: KeyboardEvent): void => {
        if (key === 'Escape') {
            closePopup();
        }
    };

    const onSaveTask = (evt: React.FormEvent): void => {
        evt.preventDefault();
        updateTask({
            id: task.id,
            author: task.author,
            title: state.title,
            description: state.description,
            comments: state.comments,
        });
        closePopup();
    };

    const onDeleteTask = () => {
        deleteTask(task.id);
        closePopup();
    };

    const onAddCommentHandler = (comment: IComment): void => {
        setState({ ...state, comments: [...state.comments, comment] });
    };

    const onUpdateCommentHandler = (newComment: IComment): void => {
        setState({
            ...state,
            comments: state.comments.map((comment) => {
                return comment.id === newComment.id ? newComment : comment;
            }),
        });
    };

    const onDeleteCommentHandler = (id: string) => {
        setState({ ...state, comments: state.comments.filter((comment) => comment.id !== id) });
    };

    return (
        <Popup onClose={closePopup}>
            <Form onSubmit={onSaveTask} width={400}>
                <Input
                    type="text"
                    label="Author:"
                    name="author"
                    value={task.author}
                    placeholder={'Author is: ' + task.author}
                    readOnly={true}
                />
                <Input type="text" label="Column name:" name="column" value={columnName} readOnly={true} />
                <Input
                    type="text"
                    name="title"
                    label="Title: "
                    value={state.title}
                    placeholder="Title.."
                    onChange={onChangeHandler}
                />
                <Input
                    type="text"
                    name="description"
                    label="Description: "
                    value={state.description}
                    placeholder="Description..."
                    onChange={onChangeHandler}
                />
                <Row justifyContent="flex-end">
                    <Button type="submit" text="save" disabled={state.title.length === 0} css="margin-right: 10px;" />
                    <Button type="button" text="delete" view="danger" onClick={onDeleteTask} />
                </Row>
            </Form>
            <CommentList
                comments={state.comments}
                addComment={onAddCommentHandler}
                deleteComment={onDeleteCommentHandler}
                currentUser={currentUser}
                updateComment={onUpdateCommentHandler}
            />
        </Popup>
    );
};

export default TaskPopup;
