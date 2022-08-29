import Image from "next/image";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const DratyProElektroerozi = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Dráty pro elektroerozi">
                <Text weight={600} size={"bigger-body"}>
                    Nabídka
                </Text>
                <ul>
                    <li>
                        <Text>Standardní dráty mosazné</Text>
                    </li>
                    <li>
                        <Text>
                            Speciální dráty povlakované pro dosahování vyšších
                            výkonů
                        </Text>
                    </li>
                    <li>
                        <Text>Měkké dráty pro řezání větších úhlů</Text>
                    </li>
                    <li>
                        <Text>
                            Průměry drátů: 0,100mm, 0,150mm, 0,200mm, 0,250mm,
                            0,300mm
                        </Text>
                    </li>
                    <li>
                        <Text>Cívky K125, K160, K200, P5, P10, a další…</Text>
                    </li>
                </ul>
                <Image
                    width={600}
                    height={400}
                    src="/assets/images/what-we-do/coils.png"
                    alt="Cívky"
                />
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default DratyProElektroerozi;
