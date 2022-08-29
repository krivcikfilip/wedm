import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const ElektroErozivniRezani = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Elektroerozivní řezání">
                <Text>
                    Název naší firmy je jednoduchý a nejlépe vystihuje naši
                    činnost
                </Text>
                <Text>
                    <strong>W</strong> – wire
                </Text>
                <Text>
                    <strong>E</strong> – electric
                </Text>
                <Text>
                    <strong>D</strong> – discharge
                </Text>
                <Text>
                    <strong>M</strong> – machining
                </Text>
                <Text>
                    Je to zkratka anglicky psaného způsobu obrábění, česky volně
                    přeloženo „drátové elektricky vybíjecí obrábění“.
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default ElektroErozivniRezani;
