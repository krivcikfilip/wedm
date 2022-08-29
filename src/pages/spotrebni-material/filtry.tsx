import Image from "next/image";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const Filtry = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Filtry">
                <Text size={"bigger-body"} weight={600}>
                    Nabízíme
                </Text>
                <ul>
                    <li>
                        <Text>Filtry pro drátové řezačky</Text>
                    </li>
                    <li>
                        <Text>Filtry pro hloubičky</Text>
                    </li>
                    <li>
                        <Text>
                            Filtry speciální (např. filtrace navlékací vody)
                        </Text>
                    </li>
                    <li>
                        <Text>Filtry pro úpravny vody</Text>
                    </li>
                    <li>
                        <Text>Filtry pro startovačky děr</Text>
                    </li>
                </ul>
                <Image
                    width={600}
                    height={400}
                    src="/assets/images/what-we-do/filters.png"
                    alt="Filtry"
                />
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default Filtry;
