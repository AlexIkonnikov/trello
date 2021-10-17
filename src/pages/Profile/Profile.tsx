import React, { FC } from 'react'
import { selectors } from '../../redux/ducks';
import { useAppSelector } from '../../redux/hook';
import { Container } from '../../ui/Container';
import { Input } from '../../ui/Input';

const Profile: FC = () => {
    const user = useAppSelector(selectors.user.selectUserSlice);
    return (
        <Container>
            <Input readOnly label="Имя: " name="name" value={user.name}/>
            <Input readOnly label="Электронная почта: " name="email" value={user.email}/>
            <Input readOnly label="id пользователя: " name="id" value={user.id}/>
        </Container>
    )
}

export default Profile;
