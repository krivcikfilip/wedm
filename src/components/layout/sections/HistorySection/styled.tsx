import styled from "styled-components";

import { Text } from "@/components/core";
import { Section } from "@/components/layout/main";

export const Wrapper = styled(Section)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export const Content = styled.div``;

export const ContentSubtitle = styled(Text)`
    color: ${(props) => props.theme.color.primary};
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
`;

export const ContentTitle = styled(Text)`
    margin-bottom: 30px;
`;

export const ContentDescription = styled(Text)``;

export const ContentBlock = styled.a`
    background: #fff;
    padding: 30px;
    cursor: pointer;
    text-decoration: none;

    &::before {
        background: ${(props) => props.theme.color.primary};
    }
`;

export const ContentBlockTitle = styled(Text)`
    margin-bottom: 18px;
`;

export const ContentBlockDescription = styled(Text)`
    margin-bottom: 40px;
`;

export const StatsBlock = styled.div`
    background: ${(props) => props.theme.color.primary};
    grid-column: 2 / -1;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1000px) {
        grid-column: 1 / 2;
        padding: 30px;
        flex-wrap: wrap;
    }
`;

export const StatsBlockItem = styled.div`
    flex: 1;
    color: #fff;
    text-align: left;
    max-width: 25%;

    @media (max-width: 1000px) {
        width: 100%;
        flex: auto;
        max-width: 100%;

        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`;

export const StatsBlockTitle = styled(Text)`
    margin-bottom: 10px;

    i {
        font-style: normal;
        font-size: 28px;
    }
`;

export const StatsBlockDescription = styled(Text)``;

export const ImageBlock = styled.a`
    position: relative;
    width: 100%;
    height: 100%;
    text-decoration: none;
    display: inline-block;

    @media (max-width: 1000px) {
        height: 320px;
    }
`;

export const ImageBlockImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: #777;
    z-index: -1;

    span {
        width: 100% !important;
        height: 100% !important;
    }

    img {
        object-fit: cover;
    }
`;

export const ImageBlockTitle = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 24px 32px;
    color: #fff;
    background: ${(props) => props.theme.color.dark};
`;
