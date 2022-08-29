import styled from "styled-components";

import { Text } from "@/components/core";
import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 80px;
    margin-bottom: 120px !important;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

export const Sidenav = styled.aside`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 24px 18px;
    height: max-content;
    position: sticky;
    top: 120px;

    @media (max-width: 1000px) {
        position: relative;
        top: 0;
        margin-top: 0;
    }
`;

export const SidenavLink = styled(Text)<SidenavLinkProps>`
    text-decoration: none;
    padding: 14px 0;
    transition: 0.3s all ease;
    color: ${(props) =>
        props.isActive ? props.theme.color.primary : "inherit"};

    &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }

    &::before {
        height: 2px;
        background: ${(props) => props.theme.color.primary};
    }
`;

export const Content = styled.div`
    ul {
        padding-left: 12px;
    }

    ul:not(:last-child) {
        margin-bottom: 36px;
    }

    li:not(:last-child),
    ${StyledText.Wrapper}:not(:last-child) {
        margin-bottom: 24px;
    }

    img {
        padding: 6px !important;
    }
`;

export const ContentTitle = styled(Text)`
    margin-bottom: 60px !important;
`;

interface SidenavLinkProps {
    isActive: boolean;
}
