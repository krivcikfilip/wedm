import styled from "styled-components";

import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.header`
    height: 95px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 35px;
    background: #fff;
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
`;

export const MenuItem = styled.li`
    height: 100%;
    padding: 0 25px;
    position: relative;

    &:hover::after {
        opacity: 1;
    }

    &::after {
        content: "";
        opacity: 0;
        position: absolute;
        height: 1px;
        width: 50%;
        left: 50%;
        bottom: 0;
        transition: 0.3s all ease;
        transform: translateX(-50%);
        background: ${(props) => props.theme.color.dark};
    }

    ${StyledText.Wrapper} {
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        align-items: center;
        height: 100%;
    }
`;

export const Foreign = styled.div`
    margin-left: auto;
    height: 100%;
    display: flex;
    align-items: center;

    ${StyledText.Wrapper} {
        text-transform: uppercase;
        text-decoration: none;
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
