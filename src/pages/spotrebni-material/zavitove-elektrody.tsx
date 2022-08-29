import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const ZavitoveElektrody = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Závitové elektrody">
                <Text weight={600} size={"bigger-body"}>
                    Kategorie
                </Text>
                <ul>
                    <li>
                        <Text>Měděné</Text>
                    </li>
                    <li>
                        <Text>Wolframové</Text>
                    </li>
                    <li>
                        <Text>Grafitové</Text>
                    </li>
                    <li>
                        <Text>Wolframměděné</Text>
                    </li>
                </ul>
                <Text>
                    Metrické závity s klasickým stoupáním od M2 do M24 pro
                    planetování s vnitřním výplachem
                </Text>
                <Text>
                    Závity s jemným stoupáním (například M5x0,5 nebo M10x1,0 a
                    mnoho dalších od M5 až do M16)
                </Text>
                <Text>Palcové závity (G1/2″ G1/4″ G3/8″ G1/8″ G3/4″)</Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default ZavitoveElektrody;
