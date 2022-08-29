import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const StartovackyDer = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Startovačky děr">
                <Text weight={600} size={"bigger-body"}>
                    Nabízíme startovačky děr pro každého:
                </Text>
                <ul>
                    <li>
                        <Text>Malé</Text>
                    </li>
                    <li>
                        <Text>Velké</Text>
                    </li>
                    <li>
                        <Text>Levné</Text>
                    </li>
                    <li>
                        <Text>Chytré</Text>
                    </li>
                </ul>
                <Text>
                    Hledáte levnou startovačku se zárukou? Ano, dodáme. Pravda,
                    je to číňan, ale než jsme je začali prodávat, tak jsme jich
                    několik u nás mučili při každodenním provozu, takže v klidu
                    na to záruku 2 roky dáme, manuál v češtině a v ceně
                    samozřejmě zapojení a proškolení obsluhy. Náhradní díly máme
                    skladem. Napište si o cenovou nabídku!
                </Text>
                <Text>
                    Nebo chcete opravdovou mašinu CNC, co za Vás vyděruje mraky
                    děr různých průměrů najednou, a není z Číny? Moderní stroj,
                    který šlape na WIN10 v počítači s i-5 od HP. Pak jistě od
                    nás chcete nabídku. Nabídneme malou, střední, velkou…….je to
                    na Vás! A cenově? No, zavolejte nebo napište…budete
                    překvapeni! Záruka, servis i po záruce samozřejmostí…
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default StartovackyDer;
