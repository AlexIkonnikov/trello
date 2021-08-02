import React, { FC, useState } from 'react';
import { Button } from '../../ui/Button';
import { Form } from '../../ui/Form';
import { Item } from '../../ui/Item';
import { Row } from '../../ui/Row';
import { Text } from '../../ui/Text';
import { UserName } from '../../ui/UserName';
import { Input } from './../../ui/Input';
import { IComment } from './../CommentList';

type CommentProps = {
    comment: IComment;
    idCommentEdited: string;
    currentUser: string;
    setIdCommentEdited: (id: string) => void;
    updateComment: (comment: IComment) => void;
    deleteComment: (id: string) => void;
};

const Comment: FC<CommentProps> = ({
    comment,
    idCommentEdited,
    currentUser,
    setIdCommentEdited,
    updateComment,
    deleteComment,
}) => {
    const [commentMessage, setCommentMessage] = useState(comment.text);

    const onChangeCommentMessage = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setCommentMessage(target.value);
    };

    const onSubmitForm = (evt: React.FormEvent): void => {
        evt.preventDefault();
        updateComment({ id: comment.id, author: comment.author, text: commentMessage });
        onOffEditMode();
    };

    const onActiveEditMode = (): void => {
        setIdCommentEdited(comment.id);
        setCommentMessage(comment.text);
    };

    const onOffEditMode = (): void => {
        setIdCommentEdited('');
    };

    const onDeleteComment = (): void => {
        deleteComment(comment.id);
    };

    if (idCommentEdited === comment.id) {
        return (
            <Item key={comment.id}>
                <Form onSubmit={onSubmitForm}>
                    <Input type="text" value={commentMessage} onChange={onChangeCommentMessage} />
                    <Row justifyContent="flex-end">
                        <Button
                            text="save"
                            type="submit"
                            css="margin-right: 10px;"
                            disabled={commentMessage.length === 0}
                        />
                        <Button view="warrning" text="cancel" type="button" onClick={onOffEditMode} />
                    </Row>
                </Form>
            </Item>
        );
    }
    if (currentUser === comment.author) {
        return (
            <Item key={comment.id}>
                <Row justifyContent="space-between">
                    <Row>
                        <UserName userName={comment.author} />:
                    </Row>
                    <Row>
                        <Button
                            disabled={idCommentEdited !== ''}
                            view="warrning"
                            text="edit"
                            onClick={onActiveEditMode}
                            css="margin-right: 10px;"
                        />
                        <Button
                            disabled={idCommentEdited !== ''}
                            view="danger"
                            text="delete"
                            onClick={onDeleteComment}
                        />
                    </Row>
                </Row>
                <Text css="margin-top: 10px;">{comment.text}</Text>
            </Item>
        );
    }
    return (
        <Item key={comment.id}>
            <Row justifyContent="space-between">
                <Row>
                    <UserName userName={comment.author} />:
                </Row>
            </Row>
            <Text css="margin-top: 10px;">{comment.text}</Text>
        </Item>
    );
};

export default Comment;
