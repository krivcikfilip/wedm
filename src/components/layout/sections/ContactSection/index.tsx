import { ContactForm } from "@/components/form/forms";

import * as Styled from "./styled";

/**
 * Contact section component
 */
export const ContactSection = () => {
    return (
        <Styled.Wrapper>
            <Styled.Body>
                <Styled.Subtitle weight={600}>Kontakt</Styled.Subtitle>
                <Styled.Title size="bigger-title" weight={600}>
                    Chcete-li se na cokoliv zeptat, neváhejte se nám ozvat zde.
                </Styled.Title>

                <Info title="E-mail" description="wedm@wedm.cz" />
                <Info title="Telefonní číslo" description="+420 608 61 25 61" />
                <Info
                    title="Adresa"
                    description="Nádražní 219, 549 01 Nové Město nad Metují"
                />
            </Styled.Body>
            <Styled.Form>
                <ContactForm />
            </Styled.Form>

            <Styled.Background />
        </Styled.Wrapper>
    );
};

/**
 * Info block
 */
const Info = ({ description, title }: InfoProps) => {
    return (
        <Styled.Info>
            <Styled.InfoTitle weight={600} size="caption">
                {title}
            </Styled.InfoTitle>
            <Styled.InfoDescription>{description}</Styled.InfoDescription>
        </Styled.Info>
    );
};

interface InfoProps {
    title: string;
    description: string;
}
