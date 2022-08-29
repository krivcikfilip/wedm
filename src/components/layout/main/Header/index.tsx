import * as _ from "lodash";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";

import { Icon, Text } from "@/components/core";
import { LinkType, RouteName } from "@/types";

import * as Styled from "./styled";
import { MobileMenuClose } from "./styled";

/**
 * Header component
 */
export const Header = () => {
    const { pathname, isReady } = useRouter();

    const [mobileMenu, setMobileMenu] = useState(false);

    const closeMobileMenu = () => setMobileMenu(false);

    const openMobileMenu = () => setMobileMenu(true);

    useEffect(() => {
        console.log(isReady);
    }, [isReady]);

    return (
        <Fragment>
            <Styled.Wrapper>
                <Link href={RouteName.DOMU}>
                    <Styled.Logo>
                        <Image
                            priority={true}
                            src="/assets/images/logo.jpg"
                            alt="Wedm"
                            layout="fill"
                        />
                    </Styled.Logo>
                </Link>

                <Styled.Menu>
                    {_.map(menu, (item, i) => (
                        <Styled.MenuItem
                            key={i}
                            isActive={pathname === item.href}
                            className="hvr-underline-from-left"
                        >
                            <Link href={item.href}>
                                <Text as="a" size="caption" weight={700}>
                                    {item.value}
                                </Text>
                            </Link>
                        </Styled.MenuItem>
                    ))}
                </Styled.Menu>

                <Link href={RouteName.FOR_FOREIGN_CLIENTS}>
                    <Styled.Foreign className="hvr-underline-from-left">
                        <Text size="caption" weight={700}>
                            For foreign clients
                        </Text>
                        <Styled.ForeignFlags>
                            <Styled.ForeignFlag>
                                <Image
                                    src="/assets/images/flags/britain.png"
                                    alt="British flag"
                                    width={25}
                                    height={15}
                                />
                            </Styled.ForeignFlag>
                            <Styled.ForeignFlag>
                                <Image
                                    src="/assets/images/flags/germany.png"
                                    alt="German flag"
                                    width={25}
                                    height={15}
                                />
                            </Styled.ForeignFlag>
                        </Styled.ForeignFlags>
                    </Styled.Foreign>
                </Link>

                <Styled.MobileMenuButton onClick={openMobileMenu}>
                    <span>Menu</span>
                    <Icon name="menu" />
                </Styled.MobileMenuButton>
            </Styled.Wrapper>

            <Styled.MobileMenu isVisible={mobileMenu}>
                <MobileMenuClose onClick={closeMobileMenu}>
                    <Icon name="close" />
                </MobileMenuClose>

                {_.map(menu, (item, i) => (
                    <Styled.MobileMenuItem key={i} onClick={closeMobileMenu}>
                        <Link href={item.href}>
                            <Text as="a" size="smaller-title" weight={700}>
                                {item.value}
                            </Text>
                        </Link>
                    </Styled.MobileMenuItem>
                ))}

                <Styled.MobileMenuItem onClick={closeMobileMenu}>
                    <Link href={RouteName.FOR_FOREIGN_CLIENTS}>
                        <Text as="a" size="smaller-title" weight={700}>
                            For foreign clients
                        </Text>
                    </Link>
                </Styled.MobileMenuItem>
            </Styled.MobileMenu>
        </Fragment>
    );
};

const menu: LinkType[] = [
    {
        href: RouteName.DOMU,
        value: "Domů",
    },
    {
        href: RouteName.DOMU + "#co-delame",
        value: "Co děláme?",
    },
    {
        href: RouteName.O_NAS,
        value: "O nás",
    },
    {
        href: RouteName.KONTAKT,
        value: "Kontakt",
    },
];
