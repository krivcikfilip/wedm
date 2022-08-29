import styled from "styled-components";

import { Text } from "@/components/core";
import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.div`
    margin-bottom: 120px !important;

    button {
        display: inline-block;
        padding: 12px;
        cursor: pointer;
        border: none;
        background: ${(props) => props.theme.color.secondary};
        margin-bottom: 32px;

        &:not(:last-child) {
            margin-right: 6px;
        }
    }

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

export const Title = styled(Text)`
    margin-bottom: 60px !important;
`;
