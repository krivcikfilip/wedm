import * as _ from "lodash";
import Image from "next/image";
import Link from "next/link";

import { Text } from "@/components/core";
import { RouteName } from "@/types";

import * as Styled from "./styled";

/**
 * Header component
 */
export const Header = () => {
    return (
        <Styled.Wrapper>
            <Link href={RouteName.HOMEPAGE}>
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
                    <Styled.MenuItem key={i}>
                        <Link href={item.href}>
                            <Text
                                value={item.value}
                                as="a"
                                size="caption"
                                weight={600}
                            />
                        </Link>
                    </Styled.MenuItem>
                ))}
            </Styled.Menu>
            <Styled.Foreign>
                <Link href={RouteName.FOR_FOREIGN_CLIENT}>
                    <Text
                        value="For foreign clients"
                        as="a"
                        size="caption"
                        weight={600}
                    />
                </Link>
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
        </Styled.Wrapper>
    );
};

const menu = [
    {
        href: RouteName.HOMEPAGE,
        value: "Domů",
    },
    {
        href: RouteName.WHAT_WE_DO,
        value: "Co děláme?",
    },
    {
        href: RouteName.ABOUT,
        value: "O nás",
    },
    {
        href: RouteName.CONTACT,
        value: "Kontakt",
    },
];
