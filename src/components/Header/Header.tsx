import React from 'react';

interface Props {
    name?: string;
}

function Header({ name }: Props): JSX.Element {
    return (
        <header className="mb-3">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <b className="navbar-brand">{name ? 'Hello, ' + name : 'Hello, guest'}</b>
                </div>
            </nav>
        </header>
    );
}

export default Header;
