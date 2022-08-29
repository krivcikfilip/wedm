import styled from "styled-components";

import { Layout } from "@/components/layout/main";
import * as StyledContactSection from "@/components/layout/sections/ContactSection/styled";
import * as StyledHistorySection from "@/components/layout/sections/HistorySection/styled";

export const Wrapper = styled(Layout)`
    ${StyledHistorySection.Wrapper} {
        margin-top: 100px !important;
        margin-bottom: 140px !important;
    }

    ${StyledContactSection.Wrapper} {
        margin-top: 140px !important;
    }
`;
