import React, { FC } from 'react';
import { Header } from '../../components/Header';
import { Column } from '../../components/Column';
import { UserPopup } from '../../components/UserPopup';
import { Container } from '../../ui/Container';
import { Row } from '../../ui/Row';
import { useAppSelector } from '../../redux/hook';
import { selectors } from '../../redux/ducks';

const Board: FC = () => {

    const userName = useAppSelector(selectors.user.selectUserName);
    const defaultColumnsName = useAppSelector(selectors.column.selectColumnSlice);

    return (
        <React.Fragment>
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
