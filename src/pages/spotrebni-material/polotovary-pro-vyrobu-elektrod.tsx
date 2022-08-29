import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const PolotovaryProVyrobuElektrod = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Polotovary pro výrobu elektrod">
                <Text weight={600} size={"bigger-body"}>
                    Polotovary pro výrobu měděných elektrod
                </Text>
                <ul>
                    <li>
                        <Text>
                            Dodáváme kvalitní elektrolytickou měď E-Cu ( ISO:
                            Cu-ETP, STN/ČSN: 423001, EN: CW004A, DIN:
                            2.0065/E-Cu58 2.0060/E-Cu57)
                        </Text>
                    </li>
                    <li>
                        <Text>Plné tyče od průměru 1 mm až do 130 mm</Text>
                    </li>
                    <li>
                        <Text>
                            Tahané tyče – čtyřhranné od 10×10 mm až po 40×40 mm
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Válcované desky o síle od 10 mm až do 100 mm
                        </Text>
                    </li>
                </ul>
                <Text weight={600} size={"bigger-body"}>
                    Polotovary pro výrobu grafitových elektrod
                </Text>
                <ul>
                    <li>
                        <Text>
                            Dodáváme kvalitní materiál od výrobců TOYO TANSO a
                            IBIDEN (Japonsko)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Vhodný pro hloubení s nízkým opotřebením elektrod,
                            vhodné také pro hloubení malých tvarů a dlouhých
                            hlubokých dutin (nedochází k tepelnému namáhání
                            elektrody a nekroutí se)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Dobře se obrábí (ale pouze s dobrým odsáváním!…jinak
                            máte na dílně jak v pekle)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            K dostání ve všech možných rozměrech od malé
                            kostičky až po velké monobloky (poptejte….nabídneme
                            dle Vašich konkrétních požadavků)
                        </Text>
                    </li>
                </ul>
                <Text weight={600} size={"bigger-body"}>
                    Wolframové a wolfram-měděné tyče a hranoly
                </Text>
                <ul>
                    <li>
                        <Text>
                            Vhodné pro hloubení do tvrdokovu a dalších těžko
                            jiskřitelných materiálů (elektrody tolik neubývají
                            díky vysokému obsahu wolframu)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Tyče od průměru 1 mm do 100 mm, délky 50, 100, 150,
                            200 mm
                        </Text>
                    </li>
                    <li>
                        <Text>Hranoly od 5 mm do 100×200 mm</Text>
                    </li>
                </ul>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default PolotovaryProVyrobuElektrod;
