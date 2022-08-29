import { rgba } from "polished";
import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
`;

export const Field = styled.input`
    width: 100%;
    padding: 14px 16px;
    outline: none;
    border: none;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.05);
    background: transparent;
    resize: none;

    &:focus {
        border-bottom-color: ${({ theme }) => rgba(theme.color.primary, 0.5)};
    }
`;
