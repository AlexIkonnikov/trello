import React, {FC} from 'react';
import styled from 'styled-components';

export const Greeting: FC<GreetingProps> = ({ name }) => {
    return (name ? <Text>Hello, {name}</Text> : <Text>Hello, guest</Text>);
};

interface GreetingProps {
    name?: string
}

const Text = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
    color: white;
    margin: 0;
`
