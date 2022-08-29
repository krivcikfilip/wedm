import styled from "styled-components";

import { Text } from "@/components/core";
import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.footer`
    position: relative;
    background: #fff;
`;

export const Content = styled.div`
    padding: 80px 0 30px;
`;

export const Logo = styled.a`
    margin-left: -15px;
`;

export const SiteMap = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -30px;
`;

export const SiteMapItem = styled.div`
    max-width: 200px;
    margin: 50px 30px 0;
    width: 100%;
    display: grid;
    grid-template-rows: minmax(30px, max-content) 1fr;
    gap: 30px;
`;

export const Title = styled(Text)`
    opacity: 0.6;
`;

export const Links = styled.div`
    grid-row: 2 / 3;

    ${StyledText.Wrapper} {
        display: block;
        text-decoration: none;
        transition: 0.3s all ease;

        &:hover {
            text-decoration: underline;
        }

        &:not(:last-child) {
            margin-bottom: 18px;
        }
    }
`;

export const Copyright = styled(Text)`
    margin-top: 60px;
`;
