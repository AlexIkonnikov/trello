import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../../ui/List';
import { Text } from '../../ui/Text';
import { Comment } from '../Comment';
import { TextForm } from '../TextForm';

export interface IComment {
    id: string;
    author: string;
    text: string;
}

type CommentListProps = {
    currentUser: string;
    comments: Array<IComment>;
    addComment: (comment: IComment) => void;
    deleteComment: (id: string) => void;
    updateComment: (comment: IComment) => void;
};

const CommentList: FC<CommentListProps> = ({ comments, addComment, deleteComment, updateComment, currentUser }) => {
    const onAddCommentHandler = (message: string): void => {
        addComment({ id: uuidv4(), author: currentUser, text: message });
    };

    return (
        <React.Fragment>
            <Text>Комментарии: </Text>
            <List>
                {comments.map((comment) => {
                    return (
                        <Comment
                            comment={comment}
                            updateComment={updateComment}
                            deleteComment={deleteComment}
                            key={comment.id}
                        />
                    );
                })}
            </List>
            <Text css="margin-bottom: 10px;">Write your comment: </Text>
            <TextForm submit={onAddCommentHandler} inputPlaceholder="Write your comment" buttonText="Add comment" />
        </React.Fragment>
    );
}

export default CommentList;
