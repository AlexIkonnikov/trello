import React from "react";
import styled from "styled-components";

export const Container = ({children}: ContainerProps): JSX.Element => {
    return <StyledContainer>{children}</StyledContainer>
}

interface ContainerProps {
    children: React.ReactNode
}

const StyledContainer = styled.div`
    max-width: 1140px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
`