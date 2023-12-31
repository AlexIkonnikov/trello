import styled from 'styled-components';
import React, { FC, HTMLAttributes } from 'react';
import { Row } from './Row';
import { UserName } from './UserName';
import { Counter } from './Counter';
import { Text } from './Text';

export const Card: FC<CardProps> = ({ author, title, commentCount, ...outerProps }) => {
    return (
        <Section {...outerProps}>
            <CardBody>
                <Text css="margin-bottom: 10px;">{title}</Text>
                <Row justifyContent="space-between" alignItems="center">
                    <Counter numeric={commentCount} />
                    <UserName userName={author} />
                </Row>
            </CardBody>
        </Section>
    );
};

interface CardProps extends HTMLAttributes<HTMLElement> {
    author: string;
    title: string;
    commentCount: number;
}

const Section = styled.section`
    margin-bottom: 10px;
`;

const CardBody = styled.div`
    width: auto;
    padding: 5px;
    border-radius: 5px;
    background: white;
    word-wrap: break-word;
    &:hover {
        box-shadow: 1px 2px 3px rgb(0 0 0 / 60%);
        cursor: pointer;
        transform: scale(1.02);
    }
`;
