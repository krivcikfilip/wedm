import styled from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";
import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.header`
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: #fff;
    margin-bottom: 95px;
    position: sticky;
    top: 0;
    z-index: 999;
    transition: 0.3s all ease;

    &:hover {
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    }

    @media (max-width: 1000px) {
        margin-bottom: 60px;
    }
`;

export const Logo = styled.a`
    height: 80%;
    width: 190px;
    position: relative;
`;

export const Menu = styled.ul`
    margin-left: 40px;
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const MobileMenuButton = styled.button`
    display: none;
    margin-left: auto;
    background: none;
    border: none;
    padding: 8px;
    align-items: center;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;

    ${StyledIcon.Wrapper} {
        width: 30px;
        height: 30px;
        margin-left: 8px;
    }

    @media (max-width: 1000px) {
        display: flex;
    }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
    display: none;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    padding: 30px;
    background: ${(props) => props.theme.color.primary};

    @media (max-width: 1000px) {
        display: ${(p) => (p.isVisible ? "flex" : "none")};
    }
`;

export const MobileMenuItem = styled.div`
    ${StyledText.Wrapper} {
        text-decoration: none;
        color: #fff;
    }

    &:not(:last-child) {
        margin-bottom: 32px;
    }
`;

export const MobileMenuClose = styled.button`
    background: none;
    position: absolute;
    padding: 8px;
    right: 22px;
    top: 25px;
    border: none;

    ${StyledIcon.Wrapper} {
        width: 30px;
        height: 30px;
        fill: #fff;
    }
`;

export const MenuItem = styled.li<MenuItemProps>`
    height: 100%;
    position: relative;

    &::before {
        height: 2px;
        background: ${(props) => props.theme.color.primary};
    }

    ${StyledText.Wrapper} {
        padding: 0 25px;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;

        color: ${(props) =>
            props.isActive ? props.theme.color.primary : "inherit"};
    }
`;

export const Foreign = styled.a`
    margin-left: auto;
    height: 100%;
    display: flex;
    text-decoration: none;
    align-items: center;

    ${StyledText.Wrapper} {
        text-transform: uppercase;
        text-decoration: none;
    }

    &::before {
        height: 2px;
        background: ${(props) => props.theme.color.primary};
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const ForeignFlags = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 15px;
`;

export const ForeignFlag = styled.div`
    position: relative;
    height: 20%;
    width: 30px;

    &:not(:last-child) {
        margin-right: 5px;
    }
`;

interface MenuItemProps {
    isActive: boolean;
}

interface MobileMenuProps {
    isVisible: boolean;
}
