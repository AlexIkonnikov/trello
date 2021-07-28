import React from 'react';
import { Overlay } from '../../ui/Overlay';
import { FormWrapper } from '../../ui/Form';
import { ITask } from './../Task/Task';
import { useState } from 'react';
import Comments, { IComment } from '../Comments/Comments';
import { useEffect } from 'react';

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
      setState({ ...state, comments: state.comments.map((comment) => {
          return comment.id === newComment.id ? newComment : comment;
      })});
    }

    const onDeleteCommentHandler = (id: string) => {
        setState({ ...state, comments: state.comments.filter((comment) => comment.id !== id) });
    };

    return (
        <Overlay onKeyDown={onCloseModal} tabIndex={0}>
            <FormWrapper>
                <form onSubmit={onSaveTask}>
                    <div className="text-end">
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => {
                                closePopup();
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder={'Author is: ' + task.author}
                            readOnly={true}
                            className="form-control"
                        />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder={columnName} readOnly={true} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title:{' '}
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={state.title}
                            placeholder="Title.."
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                            Description:{' '}
                        </label>
                        <input
                            type="text"
                            name="description"
                            id="description"
                            value={state.description}
                            placeholder="Description..."
                            className="form-control"
                            onChange={onChangeHandler}
                        />
                    </div>
                    <div className="text-end">
                        <button className="btn btn-primary" type="submit" disabled={state.title.length === 0}>
                            Save
                        </button>
                        <button className="btn btn-danger ms-2" onClick={onDeleteTask}>
                            Delete
                        </button>
                    </div>
                </form>
                <Comments
                    comments={state.comments}
                    addComment={onAddCommentHandler}
                    deleteComment={onDeleteCommentHandler}
                    currentUser={currentUser}
                    updateComment={onUpdateCommentHandler}
                />
            </FormWrapper>
        </Overlay>
    );
}

export default TaskPopup;
