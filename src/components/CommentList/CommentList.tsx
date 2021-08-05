import React, { FC, useState } from 'react';
import { IComment } from '../../redux/ducks/tasks/types';
import { useAppSelector } from '../../redux/hook';
import { List } from '../../ui/List';
import { Text } from '../../ui/Text';
import { Comment } from '../Comment';

type CommentListProps = {
    comments: Array<IComment>
    taskId: string;
};

const CommentList: FC<CommentListProps> = ({ comments, taskId }) => {
    const currentUser = useAppSelector((state) => state.user.name);

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
                            idCommentEdited={idCommentEdited}
                            setIdCommentEdited={changeIdCommentEdit}
                        />
                    );
                })}
            </List>
        </React.Fragment>
    );
};

export default CommentList;
