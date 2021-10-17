import React, { FC, useState } from 'react';
import { IComment } from '../../redux/tasks/types';
import { useAppSelector } from '../../redux/hook';
import { List } from '../../ui/List';
import { Text } from '../../ui/Text';
import { Comment } from '../Comment';
import {selectors} from '../../redux/ducks';

type CommentListProps = {
    comments: Array<IComment>
};

const CommentList: FC<CommentListProps> = ({ comments }) => {
    const currentUser = useAppSelector(selectors.user.selectUserName);

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
