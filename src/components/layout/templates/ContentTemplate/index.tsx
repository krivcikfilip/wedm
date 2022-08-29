import { Fragment } from "react";

import { ContactSection } from "@/components/layout/sections";
import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Content template
 */
export const ContentTemplate = ({ title, children }: ContentTemplateProps) => {
    return (
        <Fragment>
            <Styled.Wrapper data-aos="fade-up">
                <Styled.Title size="bigger-title" weight={700}>
                    {title}
                </Styled.Title>
                {children}
            </Styled.Wrapper>

            <ContactSection />
        </Fragment>
    );
};

interface ContentTemplateProps extends PropsWithChildren {
    title: string;
}
