import Image from "next/image";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const CimProgramujeme = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Čím programujeme">
                <Text weight={600} size="bigger-body">
                    Pro naši práci používáme tento software:
                </Text>
                <Text>KOVOPROG</Text>
                <Text>PEPS</Text>

                <Image
                    width={400}
                    height={200}
                    src="/assets/images/what-we-do/object-in-kovoprog.png"
                    alt="Objekt v kovoprogu"
                />

                <Image
                    width={400}
                    height={200}
                    src="/assets/images/what-we-do/object-in-pepsu.png"
                    alt="Objekt v pepsu"
                />
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default CimProgramujeme;
