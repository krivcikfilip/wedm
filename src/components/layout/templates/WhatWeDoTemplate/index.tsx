import * as _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

import { ContactSection } from "@/components/layout/sections";
import { LinkType, PropsWithChildren, RouteName } from "@/types";

import * as Styled from "./styled";

/**
 * What we do template
 */

export const WhatWeDoTemplate = ({
    title,
    children,
}: WhatWeDoTemplateProps) => {
    const { pathname } = useRouter();

    const links = pathname.includes(RouteName.ELEKTRO_EROZIVNI_REZANI)
        ? cuttingLinks
        : pathname.includes(RouteName.SPOTREBNI_MATERIAL)
        ? consumablesLinks
        : servisLinks;

    return (
        <Fragment>
            <Styled.Wrapper>
                <Styled.Sidenav>
                    {_.map(links, (link, i) => (
                        <Link href={link.href} key={i}>
                            <Styled.SidenavLink
                                forwardedAs="a"
                                weight={600}
                                isActive={link.href === pathname}
                                className="hvr-underline-from-left"
                            >
                                {link.value}
                            </Styled.SidenavLink>
                        </Link>
                    ))}
                </Styled.Sidenav>
                <Styled.Content data-aos="fade-up">
                    <Styled.ContentTitle size="bigger-title" weight={700}>
                        {title}
                    </Styled.ContentTitle>
                    {children}
                </Styled.Content>
            </Styled.Wrapper>

            <ContactSection />
        </Fragment>
    );
};

const cuttingLinks: LinkType[] = [
    {
        href: RouteName.ELEKTRO_EROZIVNI_REZANI,
        value: "Elektroerozivní řezání",
    },
    {
        href: RouteName.OBECNE_O_ELEKTRO_EROZI,
        value: "Obecně o elektroerozi",
    },
    {
        href: RouteName.CIM_PROGRAMUJEME,
        value: "Čím programujeme",
    },
    {
        href: RouteName.CIM_REZEME,
        value: "Čím řežeme",
    },
    {
        href: RouteName.CO_LZE_VYREZAT_NA_DRATOVCE,
        value: "Co lze vyřezat na drátovce",
    },
];

const consumablesLinks: LinkType[] = [
    {
        href: RouteName.SPOTREBNI_MATERIAL,
        value: "Spotřební materiál",
    },
    {
        href: RouteName.CHEMIE,
        value: "Chemie",
    },
    {
        href: RouteName.DRATY_PRO_ELEKTROEROZI,
        value: "Dráty pro elektroerozi",
    },
    {
        href: RouteName.POLOTOVARY_PRO_VYROBU_ELEKTROD,
        value: "Polotovary pro výrobu elektrod",
    },
    {
        href: RouteName.ZAVITOVE_ELEKTRODY,
        value: "Závitové elektrody",
    },
    {
        href: RouteName.TRUBICKOVE_ELEKTRODY,
        value: "Trubičkové elektrody",
    },
    {
        href: RouteName.NAHRADNI_DILY,
        value: "Náhradní díly",
    },
    {
        href: RouteName.DIELEKTRIKUM_PRO_HLOUBENI,
        value: "Dielektrikum pro hloubení",
    },
    {
        href: RouteName.DEIONIZACNI_SMESI,
        value: "Deionizační směsi",
    },
    {
        href: RouteName.FILTRY,
        value: "Filtry",
    },
    {
        href: RouteName.UPINANI_A_NARADI_PRO_EDM,
        value: "Upínání a nářadí pro EDM",
    },
];

const servisLinks: LinkType[] = [
    {
        href: RouteName.SERVISNI_CINNOST,
        value: "Servisní činnost",
    },
    {
        href: RouteName.NASE_PRODEJNI_POLITIKA,
        value: "Naše prodejní politika",
    },
    {
        href: RouteName.DRATOVKY_ACCUTEX,
        value: "Drátovky AccuteX",
    },
    {
        href: RouteName.STARTOVACKY_DER,
        value: "Startovačky děr",
    },
    {
        href: RouteName.AUTORIZOVANY_SERVIS,
        value: "Autorizovaný servis",
    },
];

interface WhatWeDoTemplateProps extends PropsWithChildren {
    title: string;
}
