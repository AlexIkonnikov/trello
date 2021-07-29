import React from 'react';
import { Container } from '../../ui/Container';
import { Greeting } from '../../ui/Greeting';
import { Header as StyledHeader } from './../../ui/Header';

interface Props {
    name?: string;
}

function Header({ name }: Props): JSX.Element {
    return (
        <StyledHeader>
            <Container>
                <Greeting name={name} />
            </Container>
        </StyledHeader>
    );
}

export default Header;
