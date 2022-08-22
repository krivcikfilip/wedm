import { Footer, Header } from "@/components/layout";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Template component
 */
export const Template = ({ children }: TemplateProps) => {
    return (
        <Styled.Wrapper>
            <Header />
            <Styled.Main>{children}</Styled.Main>
            <Footer />
        </Styled.Wrapper>
    );
};

interface TemplateProps extends PropsWithChildren {}
