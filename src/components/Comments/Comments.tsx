import React from 'react';
import AddTaskForm from '../AddTaskForm/AddTaskForm';
import { v4 as uuidv4 } from 'uuid';

export interface IComment {
    id: string
    author: string
    text: string
}

type Props = {
    currentUser: string
    comments: Array<IComment>
    addComment: (comment: IComment) => void,
    deleteComment: (id: string) => void
};

function Comments({ comments, addComment, deleteComment, currentUser}: Props): JSX.Element {


    const onAddCommentHandler = (message: string): void => {
        addComment({id: uuidv4(), author: currentUser, text: message});
    };

    return (
        <React.Fragment>
            <hr/>
            <h6 className="mt-2 mb-2">Комментарии: </h6>
            <ul className="list-group">
                {comments.map((comment) => {
                    return (
                        <li key={comment.id} className="list-group-item mb-1 d-flex justify-content-between">
                            <div>
                                {comment.author}: {comment.text}
                            </div>
                            <button type="button" className="btn-close btn-sm btn-danger" onClick={() => deleteComment(comment.id)}></button>
                        </li>
                    );
                })}
            </ul>
            <hr/>
            <h6>Write your comment: </h6>
            <AddTaskForm submit={onAddCommentHandler} />
        </React.Fragment>
    );
}

export default Comments;
