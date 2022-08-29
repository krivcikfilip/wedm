import styled from "styled-components";

import { Text } from "@/components/core";
import * as StyledIcon from "@/components/core/Icon/styled";
import * as StyledText from "@/components/core/Text/styled";
import { Section } from "@/components/layout/main";

export const Wrapper = styled(Section)`
    padding-top: 40px;
    padding-bottom: 300px;
`;

export const BackgroundImage = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    height: 450px;
    width: 100%;
    z-index: -1;
    background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)),
        url("/assets/images/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Title = styled(Text)`
    margin-bottom: 28px;
    max-width: 1000px;
`;

export const Description = styled(Text)`
    max-width: 700px;
`;

export const Items = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 1000px) {
        display: flex;
        flex-wrap: wrap;
    }
`;

export const ItemShortcut = styled(Text)`
    width: 50px;
    height: 50px;
    background: ${(props) => props.theme.color.light};
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s all ease;
`;

export const Item = styled.a`
    background: #fff;
    padding: 30px;
    cursor: pointer;
    transition: 0.3s all ease;
    text-decoration: none;
    display: flex;
    flex-direction: column;

    &::before {
        background: ${(props) => props.theme.color.primary};
    }

    &:nth-child(2) {
        background: ${(props) => props.theme.color.primary};

        ${StyledText.Wrapper} {
            color: #fff;
        }

        ${StyledIcon.Wrapper} {
            fill: #fff;
        }

        ${ItemShortcut} {
            background: #fff;
            color: ${(props) => props.theme.color.primary};
        }
    }

    &:nth-child(2)::before {
        background: #fff;
    }

    div:last-child {
        margin-top: auto;
    }

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const ItemTitle = styled(Text)`
    margin-bottom: 22px;
`;

export const ItemDescription = styled(Text)`
    margin-bottom: 50px;
    font-weight: 300;
`;
