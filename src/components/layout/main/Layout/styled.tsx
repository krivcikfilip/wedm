import styled from "styled-components";

import * as StyledFooter from "@/components/layout/main/Footer/styled";
import * as StyledHeader from "@/components/layout/main/Header/styled";
import * as StyledSection from "@/components/layout/main/Section/styled";
import * as StyledContentTemplate from "@/components/layout/templates/ContentTemplate/styled";
import * as StyledWhatWeDoTemplate from "@/components/layout/templates/WhatWeDoTemplate/styled";

export const Wrapper = styled.div`
    ${StyledHeader.Wrapper} {
        padding: 0 35px;

        @media (max-width: 1000px) {
            padding: 0 20px;
        }
    }

    ${StyledSection.Content},
    ${StyledFooter.Content},
    ${StyledWhatWeDoTemplate.Wrapper},
    ${StyledContentTemplate.Wrapper} {
        margin: auto;
        max-width: 1600px;
        padding-left: 150px;
        padding-right: 150px;

        @media (max-width: 1500px) {
            padding-left: 120px;
            padding-right: 120px;
        }

        @media (max-width: 1300px) {
            padding-left: 35px;
            padding-right: 35px;
        }

        @media (max-width: 1000px) {
            padding-left: 20px;
            padding-right: 20px;
        }
    }
`;

export const Main = styled.main``;
