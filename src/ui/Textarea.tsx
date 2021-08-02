import styled from 'styled-components';
import React, {FC, TextareaHTMLAttributes} from 'react';

export const Textarea: FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({...all}) => {
    return <StyledTextarea {...all} />
}

const StyledTextarea =  styled.textarea`
    padding: 5px;
    width: 100%;
    resize: none;
    margin: 5px 0;
    color: black;
    background-color: white;
    border: 1px solid #ced4da;
    border-radius: 5px;

    &:focus {
        outline: 0;
        box-shadow: 0 0 0 0.25rem rgba(15, 115, 255, 0.2);
    }
`;

