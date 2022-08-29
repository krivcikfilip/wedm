import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const AutorizovanyServis = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Autorizovaný servis">
                <Text weight={600} size={"bigger-body"}>
                    Servis pro AccuteX
                </Text>
                <Text>
                    pro tuto značku jsme vyhradili speciální stránky zde:
                    <a href="https://www.accutex.eu/">www.accutex.eu</a> Tam se
                    dozvíte vše, co potřebujete.
                </Text>
                <Text weight={600} size={"bigger-body"}>
                    Servis na námi prodávané startovačky
                </Text>
                <Text>
                    Samozřejmostí je náš servis a podpora všech našich
                    zákazníků, kteří od nás koupili startovačku děr (v České
                    Republice, na Slovensku a v Německu). Díly nakupujeme přímo
                    od výrobců strojů, a samozřejmě máme ty největší adepty na
                    výměnu (díly a součástky) u nás skladem. Děláme, a uděláme
                    maximum pro to, aby byl zákazník spokojen, a nestálo ho to
                    po záruce hodně peněz.
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default AutorizovanyServis;
