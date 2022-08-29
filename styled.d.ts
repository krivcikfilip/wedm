import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: string;
            secondary: string;
            dark: string;
            light: string;
        };
        fontFamily: {
            manrope: string;
        };
    }
}
