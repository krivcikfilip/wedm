import Image from "next/image";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const CoLzeVyrezatNaDratovce = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Co lze vyřezat na drátovce">
                <Text>
                    Elektroerozivně lze obrábět vlastně všechno, co je
                    elektrovodivé. <br />
                    <br /> Přefiknout můžeme třeba jen šroubek, ale také vyřezat
                    přesné otvory a dutiny ve střižném nástroji se střižnou vůlí
                    pár tisícin a s povrchem tomu odpovídajícím.
                    <br />
                    <br />
                    Vlastně lze vyřezat jakýkoliv tvar, který je průběžně skrz
                    celý obrobek. Samozřejmostí jsou šikmé otvory (i s
                    proměnlivými úhly), ale s omezením pojezdů stroje a s
                    omezením vlastností ohybu drátu. Takže my řežeme do 30st na
                    stěnu (při výšce obrobku do 50mm). Do vyšších obrobků také
                    řežeme pod úhlem, ale menším (například obrobek 150mm pod
                    úhlem do 15st na stranu).
                </Text>
                <Text weight={600} size={"bigger-body"}>
                    Materiálů, kterých se nebojíme:
                </Text>
                <ul>
                    <li>
                        <Text>Běžné ocele, kalené i surové</Text>
                    </li>
                    <li>
                        <Text>Hliník/dural, jeho slitiny</Text>
                    </li>
                    <li>
                        <Text>Tvrdokovy</Text>
                    </li>
                    <li>
                        <Text>Bronz</Text>
                    </li>
                    <li>
                        <Text>Mosaz</Text>
                    </li>
                    <li>
                        <Text>Nerezové materiály</Text>
                    </li>
                    <li>
                        <Text>
                            Zlato, stříbro, jiné elektricky vodivé drahé kovy
                        </Text>
                    </li>
                    <li>
                        <Text>Wolfram</Text>
                    </li>
                    <li>
                        <Text>Titan</Text>
                    </li>
                    <li>
                        <Text>Grafit</Text>
                    </li>
                    <li>
                        <Text>
                            Další materiály, které jsou schopny vést el. proud
                        </Text>
                    </li>
                </ul>
                <Text weight={600} size={"smaller-title"}>
                    Startovačka děr / děrovačka
                </Text>
                <Text>
                    Startovačky děr máme primárně na vyhotovení startovních děr
                    pro naše řezání. Nic-méně k nám také jezdí lidé a firmy
                    kvůli zalomeným závitníkům, utrženým šroubům, atd…. Tyto
                    umíme šetrně odjiskřit, aniž by se poškodil závit.
                    Samozřejmě nejde úplně všechno (třeba tvářecí závitníky jsou
                    plné, a aby se rozpadli, je třeba zajiskřit i do závitu).
                </Text>
                <Text>
                    Také děrujeme i pro ostatní firmy, které nemají děrovačku, a
                    potřebují startovní otvory pro své drátové řezání. Níže
                    obrázek ukazuje motor z Fabie (děrování utrženého šroubu v
                    hlavě motoru)
                </Text>
                <Image
                    width={450}
                    height={300}
                    src="/assets/images/what-we-do/fabia-screw.png"
                    alt="Zalomený šroub v motoru Fabie"
                />
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default CoLzeVyrezatNaDratovce;
