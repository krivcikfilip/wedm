import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const NaseProdejniPolitika = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Naše prodejní politika">
                <Text>
                    Našim cílem je nabídnout takové stroje, které se nebojí
                    porovnání se špičkovými stroji (co do kvality obrábění), ale
                    cenově lákavější.
                </Text>
                <Text>
                    Díky tomu, že stroje dovážíme přímo od výrobce, a jsme přímo
                    i prodejce, jsou ceny strojů pro koncového zákazníka velice
                    příjemné (podle ohlasů a zpětných reakcí našich zákazníků,
                    kteří poptávali jiné značky u jiných prodejců).
                </Text>
                <Text>
                    Pro více informací o strojích a jejich vlastnostech klikněte
                    na <a href="https://www.accutex.eu/">www.accutex.eu</a>.
                    Stránky jsou nyní uprostřed inovací a změny vzhledu, omluvte
                    proto neúplnost obsahu
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default NaseProdejniPolitika;
