import styled from "styled-components";

import * as StyledIcon from "@/components/core/Icon/styled";

export const Wrapper = styled.button`
    color: #fff;
    justify-content: center;
    height: 70px;
    padding: 12px 20px;
    cursor: pointer;
    align-items: center;
    background: ${(props) => props.theme.color.primary};
    display: flex;
    width: 100%;
    border: none;

    &::before {
        background: ${(props) => props.theme.color.dark};
    }

    &:active {
        transform: scale(0.98);
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:disabled:active {
        transform: none;
    }

    ${StyledIcon.Wrapper} {
        transform: rotate(90deg);
        transition: 0.3s all ease;
        width: 14px;
        height: 14px;
        fill: #fff;
        margin-left: 12px;
    }
`;
