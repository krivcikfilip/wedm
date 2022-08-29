import {
    ContactSection,
    FaqSection,
    HistorySection,
    HomeHeroSection,
} from "@/components/layout/sections";

import * as Styled from "./styled";

/**
 * Home view
 */
export const HomeView = () => {
    return (
        <Styled.Wrapper>
            <HomeHeroSection />
            <HistorySection />
            <FaqSection />
            <ContactSection />
        </Styled.Wrapper>
    );
};
