import styled from 'styled-components';
import React, { FC, HTMLAttributes } from 'react';
import { Row } from './Row';
import { UserName } from './UserName';
import { Counter } from './Counter';

export const Card: FC<CardProps> = ({ author, title, commentCount, ...all }) => {
    return (
        <Section {...all}>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <Row justifyContent="space-between" alignItems="center">
                    <Counter numeric={commentCount} />
                    <UserName userName={author}/>
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
        background: lightgray;
        cursor: pointer;
    }
`;

const CardTitle = styled.p`
      margin-bottom: 5px;
`
