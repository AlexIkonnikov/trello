import React, {FC} from 'react';
import { Text } from './Text';

export const Greeting: FC<GreetingProps> = ({ name }) => {
    return name ? <Text color="white" css="font-weight: 700;">Hello, {name}</Text> : <Text>Hello, guest</Text>;
};

interface GreetingProps {
    name?: string
}
