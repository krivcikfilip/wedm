import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        color: {
            primary: string;
            secondary: string;
            info: string;
            success: string;
            warning: string;
            danger: string;
            dark: string;
            light: string;
        };
    }
}