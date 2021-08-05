import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addComment } from '../../redux/ducks/tasks';
import { IComment } from '../../redux/ducks/tasks/types';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { List } from '../../ui/List';
import { Text } from '../../ui/Text';
import { Comment } from '../Comment';
import { TextForm } from '../TextForm';

type CommentListProps = {
    taskId: string;
    currentUser: string;
};

const CommentList: FC<CommentListProps> = ({ taskId, currentUser }) => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector((state) => {
        const comment: Array<IComment> = [];
        state.task.tasks.forEach((task) => {
            if (task.id === taskId) {
                comment.push(...task.comments);
            }
        });
        return comment;
    });

    const onAddCommentHandler = (message: string): void => {
        dispatch(addComment({ task_id: taskId, comment: { id: uuidv4(), author: currentUser, text: message } }));
    };

    const [idCommentEdited, setIdCommentEdited] = useState('');

    const changeIdCommentEdit = (id: string): void => {
        setIdCommentEdited(id);
    };

    return (
        <React.Fragment>
            <Text css="margin-bottom: 10px;">Комментарии: </Text>
            <List>
                {comments.map((comment) => {
                    return (
                        <Comment
                            comment={comment}
                            key={comment.id}
                            currentUser={currentUser}
                            taskId={taskId}
                            idCommentEdited={idCommentEdited}
                            setIdCommentEdited={changeIdCommentEdit}
                        />
                    );
                })}
            </List>
            <TextForm submit={onAddCommentHandler} inputPlaceholder="Write your comment" buttonText="Add comment" />
        </React.Fragment>
    );
};

export default CommentList;
