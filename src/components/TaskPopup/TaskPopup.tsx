import React from 'react';
import { Overlay } from '../../ui/Overlay';
import { ITask } from './../Task/Task';
import { Form } from './../../ui/Form';
import { useState } from 'react';
import Comments, { IComment } from '../Comments/Comments';
import { useEffect } from 'react';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Row } from '../../ui/Row';
import { Background } from '../../ui/Background';

type Props = {
    currentUser: string;
    task: ITask;
    columnName: string;
    closePopup: () => void;
    updateTask: (task: ITask) => void;
    deleteTask: (id: string) => void;
};

function TaskPopup({ task, columnName, closePopup, updateTask, deleteTask, currentUser }: Props): JSX.Element {
    const [state, setState] = useState({ ...task });

    useEffect(() => {
        updateTask({
            id: task.id,
            author: task.author,
            title: state.title,
            description: state.description,
            comments: state.comments,
        });
    }, [state.comments]);

    const onChangeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = target;
        setState({ ...state, [name]: value });
    };

    const onCloseModal = ({ key }: React.KeyboardEvent): void => {
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
        <Overlay onKeyDown={onCloseModal} tabIndex={0}>
            <Background>
                <Form onSubmit={onSaveTask}>
                    <Button
                        text="X"
                        onClick={() => {
                            closePopup();
                        }}
                    />
                    <Input type="text" placeholder={'Author is: ' + task.author} readOnly={true} />
                    <Input type="text" placeholder={columnName} readOnly={true} />
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
                    <Row justifyContent="space-between">
                        <Button text="save" type="submit" disabled={state.title.length === 0} />
                        <Button text="delete" onClick={onDeleteTask} />
                    </Row>
                </Form>
                <Comments
                    comments={state.comments}
                    addComment={onAddCommentHandler}
                    deleteComment={onDeleteCommentHandler}
                    currentUser={currentUser}
                    updateComment={onUpdateCommentHandler}
                />
            </Background>
        </Overlay>
    );
}

export default TaskPopup;
