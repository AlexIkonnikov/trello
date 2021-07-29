import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Comment from '../Comment/Comment';
import TextForm from '../TextForm/TextForm';

export interface IComment {
    id: string;
    author: string;
    text: string;
}

type Props = {
    currentUser: string;
    comments: Array<IComment>;
    addComment: (comment: IComment) => void;
    deleteComment: (id: string) => void;
    updateComment: (comment: IComment) => void;
};

function Comments({ comments, addComment, deleteComment, updateComment, currentUser }: Props): JSX.Element {
    const onAddCommentHandler = (message: string): void => {
        addComment({ id: uuidv4(), author: currentUser, text: message });
    };

    return (
        <React.Fragment>
            <hr />
            <h6 className="mt-2 mb-2">Комментарии: </h6>
            <ul className="list-group">
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
            </ul>
            <hr />
            <h6>Write your comment: </h6>
            <TextForm submit={onAddCommentHandler} inputPlaceholder="Write your comment" buttonText="Add comment" />
        </React.Fragment>
    );
}

export default Comments;
