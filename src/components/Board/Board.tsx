import React, { FC, useState } from 'react';
import { Header } from './../Header';
import { Column } from './../Column';
import { UserPopup } from './../UserPopup';
import { GlobalStyle } from './../../ui/GlobalStyle';
import { Container } from './../../ui/Container';
import { Row } from './../../ui/Row';
import { useAppSelector } from '../../redux/hook';

const Board: FC = () => {

    const userName = useAppSelector((state) => state.user.name);
    const defaultColumnsName: Array<string> = ['TODO', 'In Progress', 'Testing', 'Done'];

    return (
        <React.Fragment>
            <GlobalStyle />
            <UserPopup />
            <Header name={userName} />
            <Container>
                <Row alignItems="flex-start">
                    {defaultColumnsName.map((columnName, indexColumn) => {
                        return (
                            <Column author={userName} nameOfColumn={columnName} key={columnName} index={indexColumn} />
                        );
                    })}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Board;
