import React, { useState } from 'react';
import { IComment } from './../Comments/Comments';

type Props = {
    comment: IComment;
    updateComment: (comment: IComment) => void;
    deleteComment: (id: string) => void;
};

function Comment({ comment, updateComment, deleteComment }: Props): JSX.Element {
    const [isEditMode, setMode] = useState(false);
    const [commentMessage, setCommentMessage] = useState(comment.text);

    const onChangeCommentMessage = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setCommentMessage(target.value);
    };

    const onSubmitForm = (evt: React.FormEvent): void => {
        evt.preventDefault();
        updateComment({ id: comment.id, author: comment.author, text: commentMessage });
        setMode(false);
    };

    if (isEditMode) {
        return (
            <li key={comment.id} className="list-group-item mb-1 d-flex justify-content-between align-items-center">
                <form className="row justify-content-between" onSubmit={onSubmitForm}>
                    <div className="col-auto">
                        <input
                            className="form-control form-control-sm"
                            type="text"
                            value={commentMessage}
                            onChange={onChangeCommentMessage}
                        />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success btn-sm ms-2" type="submit">
                            save
                        </button>
                        <button className="btn btn-warning btn-sm ms-2" onClick={() => {setMode(false)}}>
                            cancel
                        </button>
                    </div>
                </form>
            </li>
        );
    } else {
        return (
            <li key={comment.id} className="list-group-item mb-1 d-flex justify-content-between align-items-center">
                <div>
                    {comment.author}: {comment.text}
                </div>
                <div className="button-wrapper">
                    <button
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => {
                            setMode(true);
                        }}
                    >
                        edit
                    </button>
                    <button
                        type="button"
                        className="btn btn-close btn-sm btn-danger"
                        onClick={() => deleteComment(comment.id)}
                    ></button>
                </div>
            </li>
        );
    }
}

export default Comment;
