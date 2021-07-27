import React, { useState } from 'react';
import Header from '../Header/Header';
import Column from '../Column/Column';
import UserPopup from '../UserPopup/UserPopup';

function Board(): JSX.Element {
    const [userName, setName] = useState('');

    const onChangeUserName = (userName: string): void => {
        setName(userName);
    };

    const defaultColumnsName: Array<string> = ['TODO', 'In Proccess', 'Test', 'Done'];

    return (
        <React.Fragment>
            <UserPopup setName={onChangeUserName} />
            <Header name={userName} />
            <div className="container">
                <div className="row justify-content-between">
                    {defaultColumnsName.map((columnName, indexColumn) => {
                        return <Column author={userName} nameOfColumn={columnName} key={columnName} index={indexColumn} />;
                    })}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Board;
