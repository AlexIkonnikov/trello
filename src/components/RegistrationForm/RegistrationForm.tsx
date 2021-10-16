import React, { FC } from 'react'
import { Field, Form } from 'react-final-form'
import styled from 'styled-components'
import { ROUTES } from '../../navigation/routes'
import { Button } from '../../ui/Button'
import { Input } from '../../ui/Input'
import { Link } from '../../ui/Link'

interface RegistrationForm {
    name: string;
    email: string;
    password: string;
}

const RegistrationForm: FC = () => {
    const handleRegistration = (values: RegistrationForm) => { console.log(values) }
    return (
        <Form onSubmit={handleRegistration}
            render={({ handleSubmit }) => (
                <FormWrapper>
                    <Header>Регистрация:</Header>
                    <Field
                        name="name"
                        type="text"
                        render={({ input }) => <Input {...input} label="Name: " />}
                    />
                    <Field
                        name="email"
                        type="email"
                        render={({ input }) => <Input {...input} label="Email: " />}
                    />
                    <Field
                        name="password"
                        type="password"
                        render={({ input }) => <Input {...input} label="Password: " />}
                    />
                    <Flex>
                        <Button text="Зарегестрироваться" onClick={handleSubmit} />
                        <Link to={ROUTES.auth}>Авторизация</Link>
                    </Flex>
                </FormWrapper>
            )}
        />
    )
}

const Header = styled.h3`
    margin-bottom: 10px;
`;

const FormWrapper = styled.form`
    width: 450px;
    margin: 0 auto;
    background-color: rgb(235, 236, 240);
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px #0079bf;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default RegistrationForm
