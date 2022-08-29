import Image from "next/image";
import Link from "next/link";
import React from "react";
import Count from "react-countup";

import { ArrowLink, Text } from "@/components/core";
import { RouteName } from "@/types";

import * as Styled from "./styled";

/**
 * History section component
 */
export const HistorySection = () => {
    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.ContentSubtitle weight={600}>
                    O nás
                </Styled.ContentSubtitle>
                <Styled.ContentTitle size="bigger-title" weight={700}>
                    Popis firmy
                </Styled.ContentTitle>
                <Styled.ContentDescription weight={300}>
                    Činnost naší firmy by se nejlépe dala rozdělit do těchto tří
                    kategorií: Elektroerozivní řezání, prodej EDM spotřebního
                    materiálu (dráty, filtry, ...) a servisní činnost pro EDM
                    stroje
                </Styled.ContentDescription>
            </Styled.Content>

            <ContentBlock
                href={RouteName.SERVISNI_CINNOST}
                title="Servisní činnost již od roku 2000"
                description="Již od roku 2000 se zabýváme servisní činností pro EDM stroje. Máme zkušenosti s instalací, servisem strojů a se školením obsluhy"
            />

            <Link href={RouteName.CO_LZE_VYREZAT_NA_DRATOVCE}>
                <Styled.ImageBlock>
                    <Styled.ImageBlockImage>
                        <Image
                            width={450}
                            height={300}
                            src="/assets/images/what-we-do/fabia-screw.png"
                            alt="Zalomený šroub v motoru Fabie"
                        />
                    </Styled.ImageBlockImage>
                    <Styled.ImageBlockTitle>
                        <Text weight={600} size="smaller-title">
                            Děrování utrženého šroubu v hlavě motoru
                        </Text>
                    </Styled.ImageBlockTitle>
                </Styled.ImageBlock>
            </Link>

            <ContentBlock
                href={RouteName.SPOTREBNI_MATERIAL}
                title="Prodáváme"
                description="Prodáváme EDM spotřební materiál. Například: dráty, filtry, chemie, upínání, náhradní díly na všechny značky strojů atd."
            />

            <Styled.StatsBlock>
                <StatsBlockItem
                    number={20}
                    numberUnit="+ let"
                    description="Zkušeností se servisní činností."
                />
                <StatsBlockItem
                    number={17}
                    numberUnit="+ značek"
                    description="Do kterých prodáváme náhradní díly"
                />
                <StatsBlockItem
                    number={40}
                    numberUnit="M+"
                    description="Export valule in last 10 years"
                />
            </Styled.StatsBlock>
        </Styled.Wrapper>
    );
};

/**
 * Content block for history
 */
const ContentBlock = ({ title, href, description }: ContentBlockProps) => {
    return (
        <Link href={href}>
            <Styled.ContentBlock className="hvr-underline-from-left">
                <Styled.ContentBlockTitle weight={600} size="title">
                    {title}
                </Styled.ContentBlockTitle>
                <Styled.ContentBlockDescription weight={300}>
                    {description}
                </Styled.ContentBlockDescription>
                <ArrowLink />
            </Styled.ContentBlock>
        </Link>
    );
};

/**
 * Stats block item for history
 */
const StatsBlockItem = ({
    number,
    numberUnit,
    description,
}: StatsBlockItemProps) => {
    return (
        <Styled.StatsBlockItem>
            <Styled.StatsBlockTitle weight={700} size={"bigger-title"}>
                <Count end={number} />
                <i>{numberUnit}</i>
            </Styled.StatsBlockTitle>
            <Styled.StatsBlockDescription>
                {description}
            </Styled.StatsBlockDescription>
        </Styled.StatsBlockItem>
    );
};

interface ContentBlockProps {
    title: string;
    description: string;
    href: RouteName;
}

interface StatsBlockItemProps {
    number: number;
    numberUnit?: string;
    description: string;
}
