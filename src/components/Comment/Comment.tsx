import React, { FC } from 'react';
import { Button } from '../../ui/Button';
import { Form as CustomForm } from '../../ui/Form';
import { Item } from '../../ui/Item';
import { Row } from '../../ui/Row';
import { Textarea } from '../../ui/Textarea';
import { UserName } from '../../ui/UserName';
import { Form, Field, FormProps } from 'react-final-form';
import { IComment } from '../../redux/ducks/tasks/types';
import { useAppDispatch } from '../../redux/hook';
import { deleteComment, updateComment } from '../../redux/ducks/tasks';

type CommentProps = {
    taskId: string;
    comment: IComment;
    idCommentEdited: string;
    currentUser: string;
    setIdCommentEdited: (id: string) => void;
};

const Comment: FC<CommentProps> = ({ taskId, comment, idCommentEdited, currentUser, setIdCommentEdited }) => {
    const dispatch = useAppDispatch();
    const onSubmitForm = (values: FormProps): void => {
        dispatch(
            updateComment({
                task_id: taskId,
                comment: { id: comment.id, author: comment.author, text: values.comment },
            }),
        );
        onOffEditMode();
    };

    const onActiveEditMode = (): void => {
        setIdCommentEdited(comment.id);
    };

    const onOffEditMode = (): void => {
        setIdCommentEdited('');
    };

    const onDeleteComment = (): void => {
        dispatch(deleteComment({task_id: taskId, comment: comment}));
    };

    if (idCommentEdited === comment.id) {
        return (
            <Item key={comment.id}>
                <Form onSubmit={onSubmitForm} initialValues={{ comment: comment.text }}>
                    {({ handleSubmit, values }) => (
                        <CustomForm onSubmit={handleSubmit}>
                            <Field name="comment">{({ input }) => <Textarea {...input} />}</Field>
                            <Row justifyContent="flex-end">
                                <Button
                                    text="save"
                                    type="submit"
                                    css="margin-right: 10px;"
                                    disabled={!values.comment}
                                />
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
