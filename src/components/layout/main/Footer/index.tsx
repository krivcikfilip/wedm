import Image from "next/image";
import Link from "next/link";

import { Text } from "@/components/core";
import { LinkType, RouteName } from "@/types";

import * as Styled from "./styled";

/**
 * Footer component
 */
export const Footer = () => {
    const date = new Date();

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Link href={RouteName.DOMU}>
                    <Styled.Logo>
                        <Image
                            width={150}
                            height={60}
                            src="/assets/images/logo.jpg"
                            alt="WEDM"
                        />
                    </Styled.Logo>
                </Link>

                <Styled.SiteMap>
                    <Styled.SiteMapItem>
                        <Styled.Title>Rozcestník</Styled.Title>
                        <Styled.Links>
                            <CustomLink href={RouteName.DOMU} value="Domů" />
                            <CustomLink
                                href={RouteName.CO_DELAME}
                                value="Co děláme?"
                            />
                            <CustomLink href={RouteName.O_NAS} value="O nás" />
                            <CustomLink
                                href={RouteName.KONTAKT}
                                value="Kontakt"
                            />
                            <CustomLink
                                href={RouteName.FOR_FOREIGN_CLIENTS}
                                value="For foreign clients"
                            />
                        </Styled.Links>
                    </Styled.SiteMapItem>
                    <Styled.SiteMapItem>
                        <Styled.Title>Elektroerozivní řezání</Styled.Title>
                        <Styled.Links>
                            <CustomLink
                                href={RouteName.OBECNE_O_ELEKTRO_EROZI}
                                value="Obecně o elektroerozi"
                            />
                            <CustomLink
                                href={RouteName.CIM_PROGRAMUJEME}
                                value="Čím programujeme"
                            />
                            <CustomLink
                                href={RouteName.CIM_REZEME}
                                value="Čím řežeme"
                            />
                            <CustomLink
                                href={RouteName.CO_LZE_VYREZAT_NA_DRATOVCE}
                                value="Co lze vyřezat na drátovce"
                            />
                        </Styled.Links>
                    </Styled.SiteMapItem>
                    <Styled.SiteMapItem>
                        <Styled.Title>Spotřební materiál</Styled.Title>
                        <Styled.Links>
                            <CustomLink
                                href={RouteName.CHEMIE}
                                value="Chemie"
                            />
                            <CustomLink
                                href={RouteName.DRATY_PRO_ELEKTROEROZI}
                                value="Dráty pro elektroerozi"
                            />
                            <CustomLink
                                href={RouteName.POLOTOVARY_PRO_VYROBU_ELEKTROD}
                                value="Polotovary pro výrobu..."
                            />
                            <CustomLink
                                href={RouteName.ZAVITOVE_ELEKTRODY}
                                value="Závitové elektrody"
                            />
                        </Styled.Links>
                    </Styled.SiteMapItem>
                    <Styled.SiteMapItem>
                        <Styled.Links>
                            <CustomLink
                                href={RouteName.FILTRY}
                                value="Filtry"
                            />
                            <CustomLink
                                href={RouteName.TRUBICKOVE_ELEKTRODY}
                                value="Trubičkové elektrody"
                            />
                            <CustomLink
                                href={RouteName.NAHRADNI_DILY}
                                value="Náhradní díly"
                            />
                            <CustomLink
                                href={RouteName.DIELEKTRIKUM_PRO_HLOUBENI}
                                value="Dielektrikum pro hloubení"
                            />
                            <CustomLink
                                href={RouteName.DEIONIZACNI_SMESI}
                                value="Deionizační směsi"
                            />
                            <CustomLink
                                href={RouteName.UPINANI_A_NARADI_PRO_EDM}
                                value="Upínání a nářadí..."
                            />
                        </Styled.Links>
                    </Styled.SiteMapItem>
                    <Styled.SiteMapItem>
                        <Styled.Title>Servisní činnost</Styled.Title>

                        <Styled.Links>
                            <CustomLink
                                href={RouteName.NASE_PRODEJNI_POLITIKA}
                                value="Naše prodejní politika"
                            />
                            <CustomLink
                                href={RouteName.DRATOVKY_ACCUTEX}
                                value="Drátovky AccuteX"
                            />
                            <CustomLink
                                href={RouteName.STARTOVACKY_DER}
                                value="Startovačky děr"
                            />
                            <CustomLink
                                href={RouteName.AUTORIZOVANY_SERVIS}
                                value="Autorizovaný servis"
                            />
                        </Styled.Links>
                    </Styled.SiteMapItem>
                </Styled.SiteMap>

                <Styled.Copyright size={"caption"}>
                    © Copyright {date.getFullYear()}, All Rights Reserved
                </Styled.Copyright>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

const CustomLink = ({ href, value }: LinkType) => {
    return (
        <Link href={href}>
            <Text as="a" size="caption">
                {value}
            </Text>
        </Link>
    );
};
