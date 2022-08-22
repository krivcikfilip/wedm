import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";

import * as Styled from "@/globalStyles";
import { withProviders } from "@/wrappers";

/**
 * App structure
 */
const App = ({ Component, pageProps }: AppProps) => {
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
