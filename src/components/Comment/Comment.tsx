import React, { FC, useState } from 'react';
import { Button } from '../../ui/Button';
import { Form as CustomForm } from '../../ui/Form';
import { Item } from '../../ui/Item';
import { Row } from '../../ui/Row';
import { Textarea } from '../../ui/Textarea';
import { UserName } from '../../ui/UserName';
import { IComment } from './../CommentList';
import { Form, Field, FormProps } from 'react-final-form';

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

    const onSubmitForm = (values: FormProps): void => {
        updateComment({ id: comment.id, author: comment.author, text: values.comment });
        onOffEditMode();
    };

    const onActiveEditMode = (): void => {
        setIdCommentEdited(comment.id);
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
                <Form onSubmit={onSubmitForm} initialValues={{ comment: comment.text }}>
                    {({ handleSubmit }) => (
                        <CustomForm onSubmit={handleSubmit}>
                            <Field name="comment">{({ input }) => <Textarea {...input} />}</Field>
                            <Row justifyContent="flex-end">
                                <Button text="save" type="submit" css="margin-right: 10px;" disabled={false} />
                                <Button view="warrning" text="cancel" type="button" onClick={onOffEditMode} />
                            </Row>
                        </CustomForm>
                    )}
                </Form>
            </Item>
        );
    }
    if (currentUser === comment.author) {
        return (
            <Item key={comment.id}>
                <Row justifyContent="space-between">
                    <UserName userName={comment.author} />
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
                <Textarea value={comment.text} disabled={true}></Textarea>
            </Item>
        );
    }
    return (
        <Item key={comment.id}>
            <UserName userName={comment.author} />
            <Textarea value={comment.text} disabled={true}></Textarea>
        </Item>
    );
};

export default Comment;
