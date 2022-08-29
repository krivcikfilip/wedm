import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const UpinaniANaradiProEdm = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Upínání a nářadí pro EDM">
                <ul>
                    <li>
                        <Text>
                            Svěráky značky GIN-TECH, s vyrovnáváním ve všech
                            osách
                        </Text>
                    </li>
                    <li>
                        <Text>Upínky horní, spodní, ploché, dlouhé, atd…</Text>
                    </li>
                    <li>
                        <Text>
                            Magnety ploché, sinusové naklápěcí, magnety pro
                            drátové řezání
                        </Text>
                    </li>
                    <li>
                        <Text>Referenční pravítka a lišty</Text>
                    </li>
                    <li>
                        <Text>Lišty s mikrovyrovnáváním</Text>
                    </li>
                    <li>
                        <Text>
                            Paletizační systémy ITS a držáky elektrod
                            (kompatibilní s EROWA, 3R-System, Hirschmann)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Měřící sondy a různé nástroje pro diagnostiku
                        </Text>
                    </li>
                    <li>
                        <Text>Kontrolní měrky a kalibry (ploché, kulaté)</Text>
                    </li>
                    <li>
                        <Text>
                            Potřeby pro frézování, broušení (v rámci katalogu
                            GIN-TECH)
                        </Text>
                    </li>
                </ul>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default UpinaniANaradiProEdm;
