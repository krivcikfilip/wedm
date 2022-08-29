import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const Chemie = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Chemie">
                <ul>
                    <li>
                        <Text>
                            přípravky na čištění strojů, zejména pracovních
                            částí strojů (použití při pravidelných údržbách,
                            opravách, atd…)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            přípravky na ochranu obrobků proti korozi při
                            obrábění (ochranné vosky, aplikují se přímo na
                            obrobky před obráběním)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            přípravky pro aplikaci do vodních nádrží (pomáhají
                            zpomalovat korozi při obrábění, aplikují se do vody
                            v poměru k tomu předepsaném)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            maziva pro mazání lineárních pojezdů a pohonů
                        </Text>
                    </li>
                    <li>
                        <Text>oleje pro ztrátové mazání strojů</Text>
                    </li>
                    <li>
                        <Text>vazelíny</Text>
                    </li>
                    <li>
                        <Text>
                            další chemické přípravky pro potřeby elektroeroze
                        </Text>
                    </li>
                </ul>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default Chemie;
