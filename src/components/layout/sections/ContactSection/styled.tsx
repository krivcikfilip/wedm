import styled from "styled-components";

import { Text } from "@/components/core";
import * as StyledForm from "@/components/form/main/Form/styled";
import { Section } from "@/components/layout/main";

export const Wrapper = styled(Section)`
    padding: 160px 0;
    display: flex;
    align-items: center;

    @media (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    background: url("/assets/images/pattern.png")
        ${(props) => props.theme.color.dark};
    background-repeat: no-repeat;
    background-position: right top;
`;

export const Body = styled.div`
    color: #fff;
    flex: 1;
`;

export const Form = styled.div`
    padding-left: 48px;
    max-width: 580px;
    flex: 1;

    ${StyledForm.Wrapper} {
        background: #fff;
        padding: 40px;
    }

    @media (max-width: 1000px) {
        max-width: 100%;
        padding-left: 0;
        margin-top: 60px;
        width: 100%;

        ${StyledForm.Wrapper} {
            padding: 12px;
        }
    }
`;

export const Subtitle = styled(Text)`
    text-transform: uppercase;
    color: ${(props) => props.theme.color.primary};
    letter-spacing: 3px;
`;

export const Title = styled(Text)`
    margin-top: 12px;
    margin-bottom: 32px;
    max-width: 550px;

    @media (max-width: 1000px) {
        max-width: 100%;
        width: 100%;
    }
`;

export const Info = styled.div`
    text-decoration: none;

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const InfoTitle = styled(Text)`
    text-transform: uppercase;
    opacity: 0.4;
    margin-bottom: 12px;
`;

export const InfoDescription = styled(Text)``;
