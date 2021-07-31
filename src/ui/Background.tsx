import React, {FC, HTMLAttributes} from "react";
import styled from "styled-components";

export const Background: FC<HTMLAttributes<HTMLElement>> = ({children, ...all}) => {
  return <Wrapper {...all}>{children}</Wrapper>;
}

const Wrapper = styled.div`
    background: rgb(235, 236, 240);
    width: auto;
    border-radius: 5px;
    padding: 10px;
`;
