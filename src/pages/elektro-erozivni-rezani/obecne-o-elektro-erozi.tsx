import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { WhatWeDoTemplate } from "@/components/layout/templates";

const ObecneOElektroErozi = () => {
    return (
        <Layout>
            <WhatWeDoTemplate title="Obecně o elektroerozi">
                <Text>
                    Elektroerozívní obrábění spočívá v odebírání materiálu sérií
                    výbojů (jisker), které náhodně vznikají mezi vodivým
                    obrobkem a elektrodou jako nástrojem. Elektroda, obvykle
                    připojená na záporný pól, se obrobku nedotýká a je od něho
                    oddělena malou mezerou kapalného dielektrika, nejčastěji na
                    bázi vody (elektrojiskrové řezání drátem), nebo na bázi
                    oleje či petroleje (elektrojiskrové hloubení). V obou
                    případech se jedná o dielektrikum. Elektroda se k obrobku
                    pomalu přisouvá, až se vrstva dielektrika ionizuje
                    („probije“) výbojem, který na obrobku vytvoří malý kráter.
                    Mechanismus odběru materiálu není zatím přesně vysvětlen,
                    materiál se patrně zčásti odtaví, zčásti spálí nebo odpaří.
                    Dielektrikum v mezeře se musí stále vyměňovat, aby se
                    odplavily spaliny materiálu („vyplachování“), u drátořezu
                    výplachem shora nebo zdola, u hloubičky pohybem elektrody.
                    Moderní stroje pracují s pulzním proudem o špičkové
                    intenzitě v desítkách i stovkách ampér a o frekvenci v řádu
                    desítek kilohertz. Nastavením těchto parametrů lze regulovat
                    jednak rychlost odběru materiálu, jednak kvalitu a přesnost
                    povrchu. Generátor má zpětnou vazbu, takže může automaticky
                    korigovat nepravidelnosti, například nahodilý kontakt
                    elektrody s obrobkem, a podle průběhu proudu řídí pohyby
                    elektrody. <br />
                    <br />
                    Přednosti metody plynou hlavně z toho, že nástroj a obrobek
                    se nedotýkají a nepůsobí na sebe mechanickou silou. Proto
                    lze obrábět i velmi jemné a složité tvary i z velmi tvrdých
                    materiálů, například kalené oceli, slitin titanu, atd. Tím
                    se radikálně změnila například technologie výroby nástrojů,
                    které se dříve musely kalit až po obrobení. S
                    elektrojiskrovým obráběním se tvary vyrábějí až po zakalení,
                    takže žádná deformace nehrozí. Elektrojiskrovým obráběním
                    lze dosáhnout vysoké přesnosti a kvality povrchu, které se
                    vyrovnají broušení.
                </Text>
            </WhatWeDoTemplate>
        </Layout>
    );
};

export default ObecneOElektroErozi;
