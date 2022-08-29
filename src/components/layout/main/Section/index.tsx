import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Section component
 */
export const Section = ({ children, ...props }: SectionProps) => {
    return (
        <Styled.Wrapper data-aos="fade-up">
            <Styled.Content {...props}>{children}</Styled.Content>
        </Styled.Wrapper>
    );
};

interface SectionProps extends PropsWithChildren {}
