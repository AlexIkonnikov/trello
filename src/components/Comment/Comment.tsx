import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { UserName } from '../../ui/UserName';
import { Input } from './../../ui/Input';
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
                <Form onSubmit={onSubmitForm}>
                    <Input type="text" value={commentMessage} onChange={onChangeCommentMessage} />

                    <Button text="save" type="submit" />
                    <Button
                        text="cancel"
                        type="button"
                        className="btn btn-warning btn-sm ms-2"
                        onClick={() => {
                            setMode(false);
                        }}
                    />
                </Form>
            </li>
        );
    } else {
        return (
            <li key={comment.id} className="list-group-item mb-1 d-flex justify-content-between align-items-center">
                <UserName userName={comment.author} />: {comment.text}
                <Button
                    text="edit"
                    onClick={() => {
                        setMode(true);
                    }}
                />
                <Button text="delete" onClick={() => deleteComment(comment.id)} />
            </li>
        );
    }
}

export default Comment;
