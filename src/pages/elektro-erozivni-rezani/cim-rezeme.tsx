import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const CimRezeme = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Čím řežeme">
                <ul>
                    <li>
                        <Text weight={600} size="bigger-body">
                            Drátová řezačka AccuteX SP-600i
                        </Text>
                        <Text>pojezdy stroje: X=600mm, Y=400mm, Z=400mm</Text>
                        <Text>
                            velikost obrobku: X=1200mm, Y=850mm, Z=400mm
                        </Text>
                    </li>
                    <li>
                        <Text weight={600} size="bigger-body">
                            Drátová řezačka AccuteX AL-400SA
                        </Text>
                        <Text>pojezdy stroje: X=400mm, Y=300mm, Z=220mm</Text>
                        <Text>novinka na trhu, lineární pohony os X a Y</Text>
                    </li>
                    <li>
                        <Text weight={600} size="bigger-body">
                            CNC startovačka děr NSD 640K
                        </Text>
                        <Text>pojezdy stroje: X=600mm, Y=400mm, Z=500mm</Text>
                    </li>
                    <li>
                        <Text weight={600} size="bigger-body">
                            Startovačka děr – manuální, s odměřováním
                        </Text>
                        <Text>pojezdy stroje: X=600mm, Y=400mm, Z=400mm</Text>
                        <Text>
                            tato má otevřený prac. prostor, je možné děrovat i
                            do třeba 5m dlouhého kusu (zalomené nástroje či
                            závitníky, atd…).
                        </Text>
                    </li>
                </ul>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default CimRezeme;
