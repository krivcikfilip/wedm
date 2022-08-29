import Link from "next/link";

import { ArrowLink } from "@/components/core";
import { RouteName } from "@/types";

import * as Styled from "./styled";

/**
 * Home hero section component
 */
export const HomeHeroSection = () => {
    return (
        <Styled.Wrapper>
            <Styled.Title id="co-delame" size="headline" weight={700}>
                Řežeme, Prodáváme, Spravujeme
            </Styled.Title>
            <Styled.Description size="smaller-title" weight={300}>
                Do těchto 3 kategorií by se dala rozdělit činnost naší firmy.
                Více informací zjistíte po kliknutí na jednotlivá odvětví níže.
            </Styled.Description>

            <Styled.Items>
                <Item
                    href={RouteName.ELEKTRO_EROZIVNI_REZANI}
                    shortcut="Ř"
                    title="Elektroerozivní řezání"
                    description="Vyřežeme nebo upravíme jakýkoli tvar který je z elektrovodivého materiálu."
                />

                <Item
                    href={RouteName.SPOTREBNI_MATERIAL}
                    shortcut="M"
                    title="Spotřební materiál"
                    description="Prodáváme veškerý spotřební materiál pro elektroerozívní obrábění (drátové řezání, hloubení, děrování)."
                />

                <Item
                    href={RouteName.SERVISNI_CINNOST}
                    shortcut="Č"
                    title="Servisní činnost"
                    description="Věnujeme se také servisu a podpoře všech našich zákazníků."
                />
            </Styled.Items>

            <Styled.BackgroundImage />
        </Styled.Wrapper>
    );
};

/**
 * Item for hero section
 */
const Item = ({ description, shortcut, title, href }: Props) => {
    return (
        <Link href={href}>
            <Styled.Item className="hvr-underline-from-left">
                <Styled.ItemShortcut size="caption" weight={700}>
                    {shortcut}
                </Styled.ItemShortcut>
                <Styled.ItemTitle size="title" weight={600}>
                    {title}
                </Styled.ItemTitle>
                <Styled.ItemDescription>{description}</Styled.ItemDescription>
                <ArrowLink />
            </Styled.Item>
        </Link>
    );
};

interface Props {
    href: RouteName;
    shortcut: string;
    title: string;
    description: string;
}
