import styled from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";
import * as StyledText from "@/components/core/Text/styled";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;

    ${StyledText.Wrapper} {
        font-weight: 700;
        text-transform: uppercase;
        color: ${(props) => props.theme.color.primary};
    }

    ${StyledIcon.Wrapper} {
        transform: rotate(90deg);
        width: 14px;
        height: 14px;
        margin-left: 12px;
        fill: ${(props) => props.theme.color.primary};
    }
`;
