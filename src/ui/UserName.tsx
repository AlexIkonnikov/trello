import React, { FC } from 'react';
import styled from 'styled-components';

export const UserName: FC<UserNameProps> = ({ userName }) => {
    return (
        <UserNameWrapper>
            <Bold>{userName}</Bold>
        </UserNameWrapper>
    );
};

interface UserNameProps {
    userName: string;
}

const Bold = styled.b`
    font-size: 11px;
    color: white;
`;

const UserNameWrapper = styled.span`
    padding: 2px 14px;
    background-color: #344563;
    border-radius: 14px 14px;
`;
