import Link from "next/link";
import React, { Fragment, useState } from "react";

import { Text } from "@/components/core";
import { Layout } from "@/components/layout/main";
import { ContentTemplate } from "@/components/layout/templates";

const ForForeignClients = () => {
    const [lang, setLang] = useState<Lang>("en");

    return (
        <Layout>
            <ContentTemplate title="For foreign clients">
                <button onClick={() => setLang("en")}>
                    <Text>English version</Text>
                </button>
                <button onClick={() => setLang("de")}>
                    <Text>German version</Text>
                </button>

                {lang === "en" && (
                    <Fragment>
                        <Text weight={600} size={"bigger-body"}>
                            Our company operates in the following fields:
                        </Text>
                        <ul>
                            <li>
                                <Text>Wire cutting and hole drilling</Text>
                            </li>
                            <li>
                                <Text>
                                    Wholesale of consumables for all EDM
                                    machines
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Sales and service of brand machines AccuteX
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Sales and service of small hole drilling
                                    machines
                                </Text>
                            </li>
                        </ul>
                        <Text>
                            If you have any questions, please write us your
                            question to email{" "}
                            <Link href="mailto:info@wedm.cz">info@wedm.cz</Link>
                            . We speak and write in German and also in English…
                        </Text>
                        <Text>
                            Thanks for your time.
                            <br />
                            Jiri Chvojka, owner of the WEDM company.
                        </Text>
                    </Fragment>
                )}

                {lang === "de" && (
                    <Fragment>
                        <Text weight={600} size={"bigger-body"}>
                            Unsere Firma arbeitet in diesen Bereichen:
                        </Text>
                        <ul>
                            <li>
                                <Text>Elektroerosive Bearbeitung</Text>
                            </li>
                            <li>
                                <Text>
                                    Großhandel mit Verbrauchsmaterialien für die
                                    Elektroerosion
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Verkauf von AccuteX-Maschinen und deren
                                    Service
                                </Text>
                            </li>
                            <li>
                                <Text>
                                    Verkauf und Service von Bohrmaschinen
                                    (manuell und CNC)
                                </Text>
                            </li>
                        </ul>
                        <Text>
                            WEDM s.r.o. bietet autorisierten Service für
                            AccuteX-Maschinen in der Tschechischen Republik, der
                            Slowakei, aber auch in Deutschland.
                        </Text>
                        <Text>
                            Wenn Sie Fragen haben oder ein Problem mit Ihrer
                            AccuteX-Maschine haben, senden Sie bitte eine E-Mail
                            an{" "}
                            <Link href="mailto:info@wedm.cz">info@wedm.cz</Link>
                        </Text>
                        <Text>
                            Wir können in Deutsch anrufen oder E-Mails in
                            Deutsch und Englisch.
                        </Text>
                        <Text>
                            Vielen Dank für Ihre Aufmerksamkeit
                            <br />
                            Jiri Chvojka
                        </Text>
                    </Fragment>
                )}
            </ContentTemplate>
        </Layout>
    );
};

type Lang = "en" | "de";

export default ForForeignClients;
