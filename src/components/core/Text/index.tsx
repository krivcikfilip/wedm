import { ForwardedRef, forwardRef, ReactNode } from "react";

import * as Styled from "./styled";

/**
 * Text component
 */
// eslint-disable-next-line react/display-name
export const Text = forwardRef((props: TextProps, ref: ForwardedRef<any>) => {
    const { as, size, children } = props;

    return (
        <Styled.Wrapper
            {...props}
            as={as || "p"}
            size={size || "body"}
            ref={ref}
        >
            {children}
        </Styled.Wrapper>
    );
});

export interface TextProps {
    id?: string;
    children?: ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "a";
    weight?: 300 | 400 | 500 | 600 | 700 | 900;
    size?:
        | "headline"
        | "bigger-title"
        | "title"
        | "smaller-title"
        | "bigger-body"
        | "body"
        | "caption";
}
