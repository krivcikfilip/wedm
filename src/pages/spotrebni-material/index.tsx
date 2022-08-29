import React from "react";

import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const SpotrebniMaterial = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Spotřební materiál">
                Prodáváme veškerý spotřební materiál pro elektroerozívní
                obrábění (drátové řezání, hloubení, děrování).
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default SpotrebniMaterial;
