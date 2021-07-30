import React, { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { List } from '../../ui/List';
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
            <h5 className="mt-2 mb-2">Комментарии: </h5>
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

            <hr />
            <h5>Write your comment: </h5>
            <TextForm submit={onAddCommentHandler} inputPlaceholder="Write your comment" buttonText="Add comment" />
        </React.Fragment>
    );
}

export default CommentList;
