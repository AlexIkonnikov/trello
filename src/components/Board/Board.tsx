import React, { FC } from 'react';
import { Header } from './../Header';
import { Column } from './../Column';
import { UserPopup } from './../UserPopup';
import { GlobalStyle } from './../../ui/GlobalStyle';
import { Container } from './../../ui/Container';
import { Row } from './../../ui/Row';
import { useAppSelector } from '../../redux/hook';
import { userNameSelector } from '../../redux/ducks/user';
import { columnSliceSelector } from '../../redux/ducks/column';

const Board: FC = () => {

    const userName = useAppSelector(userNameSelector);
    const defaultColumnsName = useAppSelector(columnSliceSelector);

    return (
        <React.Fragment>
            <GlobalStyle />
            <UserPopup />
            <Header name={userName} />
            <Container>
                <Row alignItems="flex-start">
                    {defaultColumnsName.map((column) => {
                        return <Column author={userName} column={column} key={column.id} />;
                    })}
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Board;
