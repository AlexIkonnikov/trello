import React, { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import styled from 'styled-components'

export const Link: FC<NavLinkProps> = ({ children, ...props }) => {
    return (
        <CustomLink {...props}>{children}</CustomLink>
    )
}

const CustomLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    &.active {
        border-color: red;
    }
    &:hover {
        border-color: red;
    }
`;