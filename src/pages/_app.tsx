import "hover.css/css/hover-min.css";
import "aos/dist/aos.css";

import AOS from "aos";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment, useEffect } from "react";

import * as Styled from "@/globalStyles";
import { withProviders } from "@/wrappers";

const App = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        AOS.init({
            offset: 50,
        });
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Wedm</title>
            </Head>
            <Styled.Global />
            <Component {...pageProps} />
        </Fragment>
    );
};

export default withProviders(App);
