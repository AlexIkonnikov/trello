import React, {FC} from 'react';
import { Container } from '../../ui/Container';
import { Greeting } from '../../ui/Greeting';
import { Header as StyledHeader } from './../../ui/Header';

interface HeaderProps {
    name?: string;
}

const Header: FC<HeaderProps> = ({ name }) => {
    return (
        <StyledHeader>
            <Container>
                <Greeting name={name} />
            </Container>
        </StyledHeader>
    );
}

export default Header;
