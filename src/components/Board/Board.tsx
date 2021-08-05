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
    const defaultColumnsName = useAppSelector((state) => state.column.columns);

    return (
        <React.Fragment>
            <GlobalStyle />
            <UserPopup />
            <Header name={userName} />
            <Container>
                <Row alignItems="flex-start">
                    {defaultColumnsName.map((column) => {
                        return (
                            <Column author={userName} column={column} key={column.id} />
                        );
                    })}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Board;
