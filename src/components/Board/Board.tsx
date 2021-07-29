import React, { useState } from 'react';
import Header from '../Header/Header';
import Column from '../Column/Column';
import UserPopup from '../UserPopup/UserPopup';
import { GlobalStyle } from '../../ui/GlobalStyle';
import { Container } from '../../ui/Container';
import { Row } from '../../ui/Row';

function Board(): JSX.Element {
    const [userName, setName] = useState('');

    const onChangeUserName = (userName: string): void => {
        setName(userName);
    };

    const defaultColumnsName: Array<string> = ['TODO', 'In Proccess', 'Test', 'Done'];

    return (
        <React.Fragment>
            <GlobalStyle />
            <UserPopup setName={onChangeUserName} />
            <Header name={userName} />
            <Container>
                <Row>
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
