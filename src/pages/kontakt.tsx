import Link from "next/link";
import React from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { ContentTemplate } from "@/components/layout/templates";

const Kontakt = () => {
    return (
        <Layout>
            <ContentTemplate title="Kontakt">
                <Text weight={600} size={"smaller-title"}>
                    Sídlo firmy, kancelář jednatele, fakturační adresa:
                </Text>
                <Text>
                    WEDM s.r.o. <br />
                    Poličanská 1487 <br />
                    190 16 Praha 9 <br />
                    <strong>IČ:</strong> 01799932 <br />
                    <strong>DIČ:</strong> CZ01799932
                </Text>

                <Text weight={600} size={"smaller-title"}>
                    Provozovna, zároveň i doručovací adresa pro VŠECHNY balíky a
                    další poštu:
                </Text>
                <Text>
                    WEDM s.r.o. <br />
                    Nádražní 219 <br />
                    549 01 Nové Město nad Metují <br />
                </Text>

                <Text weight={600} size={"smaller-title"}>
                    Telefonní spojení, emaily:
                </Text>
                <Text>
                    Chcete-li se na cokoliv zeptat, nebo chcete něco
                    vyřezat/vyděrovat, nebo dohodnout servis, školení, nabídky…
                    potom volejte{" "}
                    <Link href="tel:+420608612561">+420 608 61 25 61</Link>,
                    nebo pište na email{" "}
                    <Link href="mailto:wedm@wedm.cz">wedm@wedm.cz</Link> (Jiří
                    Chvojka, jednatel).
                </Text>
                <Text>
                    Chcete-li jen zaslat výkres k již dohodnuté výrobě nebo jen
                    cokoliv sdělit našemu EDM pracovišti, potom volejte{" "}
                    <Link href="tel:+420774612561">+420 774 61 25 61</Link>,
                    nebo pište email na{" "}
                    <Link href="mailto:vyroba@wedm.cz">vyroba@wedm.cz</Link>{" "}
                    (Jan Smola, provozovna, vedoucí výroby).
                </Text>
                <Text>
                    Chcete-li nám poslat fakturu, nebo chcete od nás nabídku na
                    spotřební materiál, nebo chcete řešit účetní věci, potom
                    volejte{" "}
                    <Link href="tel:+420777612574">+420 777 61 25 74</Link>,
                    nebo pište email na{" "}
                    <Link href="mailto:obchod@wedm.cz">obchod@wedm.cz</Link>{" "}
                    (Monika Chvojková, fakturace, účto).
                </Text>
            </ContentTemplate>
        </Layout>
    );
};

export default Kontakt;
