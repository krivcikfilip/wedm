import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const DielektrikumProHloubeni = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Dielektrikum pro hloubení">
                <Text weight={600} size={"bigger-body"}>
                    Nabízíme
                </Text>
                <ul>
                    <li>
                        <Text>Dielektrikum TOTAL MS7000 pro hloubičky</Text>
                    </li>
                    <li>
                        <Text>
                            Balení: plechový sud 208L, nebo 20L plastový kanystr
                        </Text>
                    </li>
                </ul>
                <Text>
                    Nejprodávanější dielektrikum, mísitelné s ostatními druhy
                    dielektrika (vhodné vědět, zejména pokud chcete pouze
                    dolévat do stávající náplně). Toto dielektrikum je kapalina
                    čirá, bez zápachu. Je to osvědčená kvalita značky TOTAL,
                    vhodné pro všechny aplikace hloubení (hrubování i jemné
                    dokončování).
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default DielektrikumProHloubeni;
