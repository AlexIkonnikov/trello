import React, {FC, HTMLAttributes} from "react";
import styled from "styled-components";

export const Item: FC<HTMLAttributes<HTMLUListElement>> = ({children}) => {
    return <StyledItem>{children}</StyledItem>;
}

const StyledItem = styled.li`
    margin-bottom: 10px;
`;