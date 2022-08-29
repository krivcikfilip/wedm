import { Footer, Header } from "@/components/layout/main";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Layout component
 */
export const Layout = ({ children, ...props }: LayoutProps) => {
    return (
        <Styled.Wrapper {...props}>
            <Header />
            <Styled.Main>{children}</Styled.Main>
            <Footer />
        </Styled.Wrapper>
    );
};

interface LayoutProps extends PropsWithChildren {}
