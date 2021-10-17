import React, { FC } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../navigation/routes';
import { actions } from '../../redux/ducks';
import { useAppDispatch } from '../../redux/hook';
import { Button } from '../../ui/Button';
import { Container } from '../../ui/Container';
import { Greeting } from '../../ui/Greeting';
import { Link } from '../../ui/Link';
import { Header as StyledHeader } from './../../ui/Header';

interface HeaderProps {
    name?: string;
}

const Header: FC<HeaderProps> = ({ name }) => {
    const dispatch = useAppDispatch();
    const logOut = () => {
        dispatch(actions.user.logOut());
    }
    return (
        <StyledHeader>
            <Container>
                <Flex>
                    <Greeting name={name} />
                    <NavBar>
                        <NavList>
                            <li><Link to={ROUTES.board}>доска</Link></li>
                            <li><Link to={ROUTES.profile}>профиль</Link></li>
                        </NavList>
                    </NavBar>
                    <Button text="Выход" onClick={logOut} />
                </Flex>
            </Container>
        </StyledHeader>
    );
}

const Flex = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
`;

const NavBar = styled.nav`
    margin-left: 10px;
    margin-right: auto;
`;

const NavList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & li {
        margin-right: 10px;
    }
`;

export default Header;
