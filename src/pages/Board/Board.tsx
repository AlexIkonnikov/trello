import React, { FC, useEffect, useState } from 'react';
import { Column } from '../../components/Column';
import { Container } from '../../ui/Container';
import { Row } from '../../ui/Row';
import { useAppSelector } from '../../redux/hook';
import { selectors } from '../../redux/ducks';
import { getColumns } from '../../services/api';
import { IColumn } from '../../redux/column';
import { Button } from '../../ui/Button';

const Board: FC = () => {

    const user = useAppSelector(selectors.user.selectUserSlice);
    const [columns, setColumns] = useState<IColumn[]>([]);

    useEffect(() => {
        user.id && getColumns(user.id).then((res) => {
            const {data} = res;
            setColumns(data);
        })
    }, [])

    return (
        <Container>
            <Row alignItems="flex-start">
                {columns.map((column) => {
                    return <Column author={user.name} column={column} key={column.id} />;
                })}
            </Row>
        </Container>
    );
}

export default Board;
