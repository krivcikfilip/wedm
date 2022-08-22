import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@/theme";

/**
 * With providers wrapper
 */
export const withProviders = (Component: (props: any) => JSX.Element) =>
    function C(props: any) {
        return (
            <ThemeProvider theme={defaultTheme}>
                <Component {...props} />
            </ThemeProvider>
        );
    };
