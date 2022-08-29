import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const DratovkyAccutex = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Drátovky AccuteX">
                <Text>
                    Tyto drátové řezačky nabízí velmi slušný poměr CENA/VÝKON.
                    Uvažujete o koupi drátové řezačky? Zavolejte nebo napište o
                    konkrétní nabídku stroje. Pokud se chcete jen podívat, tak
                    klikněte ZDE:{" "}
                    <a href="https://www.accutex.eu/">www.accutex.eu</a>
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default DratovkyAccutex;
