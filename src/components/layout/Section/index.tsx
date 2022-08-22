import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Section component
 */
export const Section = ({ children }: SectionProps) => {
    return <Styled.Wrapper>{children}</Styled.Wrapper>;
};

interface SectionProps extends PropsWithChildren {}
