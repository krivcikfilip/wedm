import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const ServisniCinnost = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Servisní činnost">
                <Text>Více informací najdete v levém menu.</Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default ServisniCinnost;
