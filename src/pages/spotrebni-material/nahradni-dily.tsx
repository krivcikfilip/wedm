import Image from "next/image";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const NahradniDily = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Náhradní díly">
                <Text weight={600} size={"bigger-body"}>
                    Náhradní díly na všechny u nás prodávané stroje
                </Text>
                <ul>
                    <li>
                        <Text>AccuteX</Text>
                    </li>
                    <li>
                        <Text>Agie</Text>
                    </li>
                    <li>
                        <Text>Brother</Text>
                    </li>
                    <li>
                        <Text>Excetek</Text>
                    </li>
                    <li>
                        <Text>Fanuc</Text>
                    </li>
                    <li>
                        <Text>Genspark</Text>
                    </li>
                    <li>
                        <Text>Hitachi</Text>
                    </li>
                    <li>
                        <Text>Charmilles</Text>
                    </li>
                    <li>
                        <Text>Chmer</Text>
                    </li>
                    <li>
                        <Text>Japax</Text>
                    </li>
                    <li>
                        <Text>Magos</Text>
                    </li>
                    <li>
                        <Text>Makino</Text>
                    </li>
                    <li>
                        <Text>Mitsubishi</Text>
                    </li>
                    <li>
                        <Text>Ona</Text>
                    </li>
                    <li>
                        <Text>Seibu</Text>
                    </li>
                    <li>
                        <Text>Sodick</Text>
                    </li>
                    <li>
                        <Text>SPM</Text>
                    </li>
                </ul>
                <Text>
                    Náhradní díly na všechny u nás prodávané stroje AccuteX Agie
                    Brother Excetek Fanuc Genspark Hitachi Charmilles Chmer
                    Japax Magos Makino Mitsubishi Ona Seibu Sodick SPM
                    Nejběžnější díly jako jsou vodítka, přivaděče, trysky,
                    kladky, ložiska, průvlaky, díly horních a spodních hlav,
                    keramické izolační destičky, kšandy na staré Agie, a mnoho a
                    mnoho dalšího. Poptejte u nás, a my se postaráme o to, aby
                    jste byli spokojeni.
                </Text>
                <Text>
                    Pokud není Váš stroj ve výše uvedeném seznamu, nezoufejte.
                    Napište nám email nebo zavolejte. Seženeme lecos i na jiné
                    značky a neznačky z Číny a jiných států.
                </Text>
                <Text>
                    Také prodáváme klíčové a bezklíčové hlavičky, vodítka, a
                    těsnění elektrod na všechny u nás dostupné startovačky děr.
                </Text>

                <Image
                    width={600}
                    height={400}
                    src="/assets/images/what-we-do/spare-parts-1.png"
                    alt="Náhradní díly"
                />
                <Image
                    width={600}
                    height={400}
                    src="/assets/images/what-we-do/spare-parts-2.png"
                    alt="Náhradní díly"
                />
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default NahradniDily;
