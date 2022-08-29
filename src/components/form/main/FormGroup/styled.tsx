import styled from "styled-components";

import { Text } from "@/components/core";

export const Wrapper = styled.div<WrapperProps>`
    &:not(:last-child) {
        margin-bottom: 48px;
    }
`;

export const Body = styled.div``;

export const Error = styled(Text)`
    margin-top: 12px;
    color: ${({ theme }) => theme.color.primary};
`;

interface WrapperProps {
    isError: boolean;
}
