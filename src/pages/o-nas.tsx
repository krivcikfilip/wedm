import Link from "next/link";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { ContentTemplate } from "@/components/layout/templates";
import { RouteName } from "@/types";

const ONas = () => {
    return (
        <Layout>
            <ContentTemplate title="O nás">
                <Text weight={600} size={"smaller-title"}>
                    Řežeme
                </Text>
                <Text>
                    V naší provozovně, v Novém Městě nad Metují, kde jsou naše
                    drátové řezačky a děrovačky, se snažíme vyhovět všem
                    požadavkům našich stálých, ale i nově příchozích zákazníků.
                    Netvrdíme, že umíme všechno, ale zatím se nám daří
                    vyrobit/vyříznout/vyděrovat téměř vše, co bylo potřeba.
                </Text>
                <Text>
                    Díky dlouholeté zkušenosti v oblasti drátového řezání a
                    vcelku pěkné upínací výbavě jsme schopni upnout a vyřezat
                    téměř cokoliv.
                </Text>
                <Text weight={600} size={"smaller-title"}>
                    Prodáváme
                </Text>
                <Text>
                    Naší další činností je prodej EDM spotřebního materiálu,
                    drátů, filtrů, chemie, upínání, náhradních dílů na všechny
                    značky strojů, trubičkových elektrod pro děrování, vodítka a
                    další spotřební díly pro startovačky děr, atd….
                </Text>
                <Text weight={600} size={"smaller-title"}>
                    Spravujeme
                </Text>
                <Text>
                    Již od roku 2000 se zabýváme servisní činností pro EDM
                    stroje. Na samém začátku, kdy jsem já, Jiří Chvojka,
                    pracoval pro Německou firmu, jsem dělal instalace, školení
                    obsluhy a servis prodaných strojů zde, v České Republice, na
                    Slovensku, ale také i v Německu. Byl jsem také několikrát už
                    i v Rusku (na Sibiři, pěkný kus za Novosibirskem, a také v
                    Rjazani).
                </Text>
                <Text>
                    Po nějaké době naše zkušenosti čím dál tím více směřovali
                    spíše ke strojům Taiwanské produkce, a u těchto jsme zůstali
                    až do současnosti.
                </Text>
                <Text>
                    Nejen že tyto stroje spravujeme a pečujeme o ně u našich
                    zákazníků, ale také prodáváme nové. O konkrétních značkách
                    se dozvíte v sekci{" "}
                    <Link href={RouteName.SERVISNI_CINNOST}>
                        Servisní činnost
                    </Link>
                </Text>
            </ContentTemplate>
        </Layout>
    );
};

export default ONas;
