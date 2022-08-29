import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const TrubickoveElektrody = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Trubičkové elektrody">
                <Text weight={600} size={"bigger-body"}>
                    Trubičkové elektrody nabízíme v těchto materiálových
                    variantách:
                </Text>
                <ul>
                    <li>
                        <Text>
                            Mosazné (nejpoužívanější pro děrování do všech
                            běžných materiálů)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Měděné (vhodné zejména pro děrování do tvrdokovu a
                            wolframu)
                        </Text>
                    </li>
                </ul>
                <Text weight={600} size={"bigger-body"}>
                    Také jsou dělené na dvě skupiny dle dutiny:
                </Text>
                <ul>
                    <li>
                        <Text>
                            Jednokanálové (jeden otvor středem elektrody, vhodné
                            pro klasické děrování skrz celý materiál)
                        </Text>
                    </li>
                    <li>
                        <Text>
                            Vícekanálové (od průměru 1,2 mm … používají se všude
                            tam, kde chceme děrovat slepé díry a neřešit potom
                            likvidaci vzniklého středového ostrůvku, nebo také
                            pro děrování hlubokých děr, kde by mohl vznikat
                            zkrat (středový odpad se opírá uvnitř o elektrodu, a
                            děrovačka pak couvá ze zkratu nahoru a nejede dál…)
                        </Text>
                    </li>
                </ul>
                <Text weight={600} size={"bigger-body"}>
                    Nabízíme tyto délky:
                </Text>
                <ul>
                    <li>
                        <Text>300 mm</Text>
                    </li>
                    <li>
                        <Text>400 mm</Text>
                    </li>
                    <li>
                        <Text>500 mm</Text>
                    </li>
                </ul>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default TrubickoveElektrody;
