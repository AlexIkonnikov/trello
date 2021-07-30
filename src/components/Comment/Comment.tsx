import React, { FC, 
    useState } from 'react';
import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { Item } from '../../ui/Item';
import { Row } from '../../ui/Row';
import { UserName } from '../../ui/UserName';
import { Input } from './../../ui/Input';
import { IComment } from './../CommentList';

type CommentProps = {
    comment: IComment
    updateComment: (comment: IComment) => void
    deleteComment: (id: string) => void
};

const Comment: FC<CommentProps> = ({ comment, updateComment, deleteComment }) => {
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
            <Item key={comment.id}>
                <Form onSubmit={onSubmitForm}>
                    <Input type="text" value={commentMessage} onChange={onChangeCommentMessage} />
                    <Row justifyContent="flex-end">
                        <Button text="save" type="submit" css="margin-right: 10px;" />
                        <Button
                            view="warrning"
                            text="cancel"
                            type="button"
                            onClick={() => {
                                setMode(false);
                            }}
                        />
                    </Row>
                </Form>
            </Item>
        );
    } else {
        return (
            <Item key={comment.id}>
                <Row justifyContent="space-between">
                    <Row>
                        <UserName userName={comment.author} />: {comment.text}
                    </Row>
                    <Row>
                        <Button
                            view="warrning"
                            text="edit"
                            onClick={() => {
                                setMode(true);
                            }}
                            css="margin-right: 10px;"
                        />
                        <Button view="danger" text="delete" onClick={() => deleteComment(comment.id)} />
                    </Row>
                </Row>
            </Item>
        );
    }
}

export default Comment;
