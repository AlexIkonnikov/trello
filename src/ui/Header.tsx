import React, {FC, ReactNode} from "react";
import styled from "styled-components";

export const Header: FC<ReactNode> = ({children}) => {
    return <StyledHeader>{children}</StyledHeader>;
}

const StyledHeader = styled.div`
    min-height: 40px;
    padding: 15px 0;
    background-color: #0079bf;
    margin-bottom: 20px;
`
