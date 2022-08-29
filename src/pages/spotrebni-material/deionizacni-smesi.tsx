import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const DeionizacniSmesi = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Deionizační směsi">
                <Text>
                    Prodáváme deionizační směsi v balení 50L plastový soudek
                    /pevný s uzavíratelným víkem), nebo 25L plastový pytel, nebo
                    také můžeme odměřit a poslat jakékoliv množství.
                </Text>
                <Text weight={600}>Nabízíme 2 druhy deionizační směsi:</Text>
                <ul>
                    <li>
                        <Text>
                            Kvalitní směs od předního evropského výrobce
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Standardní směsi z Asie, solidní poměr cena/kvalita
                        </Text>
                    </li>
                </ul>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default DeionizacniSmesi;
