import { rgba } from "polished";
import styled from "styled-components";

import { Text } from "@/components/core";
import { Section } from "@/components/layout/main";

export const Wrapper = styled(Section)``;

export const Subtitle = styled(Text)`
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    letter-spacing: 3px;
`;

export const Title = styled(Text)`
    margin-top: 12px;
    margin-bottom: 32px;
`;

export const Items = styled.div``;

export const Item = styled.div``;

export const ItemTitle = styled(Text)`
    padding: 24px 0;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    border-bottom: 1px solid ${(props) => rgba(props.theme.color.dark, 0.1)};
`;

export const ItemDescription = styled(Text)`
    padding: 24px 0;
`;
