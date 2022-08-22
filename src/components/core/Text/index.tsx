/**
 * Text component
 */
import { ForwardedRef, forwardRef } from "react";

import * as Styled from "./styled";

// eslint-disable-next-line react/display-name
export const Text = forwardRef(
    (props: TextProps, ref: ForwardedRef<HTMLParagraphElement>) => {
        return (
            <Styled.Wrapper
                {...props}
                ref={ref}
                dangerouslySetInnerHTML={{ __html: props.value || "" }}
            />
        );
    }
);

export interface TextProps {
    value: string | undefined;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p" | "a";
    weight?: 300 | 400 | 500 | 600 | 700;
    size?:
        | "headline"
        | "bigger-title"
        | "title"
        | "smaller-title"
        | "bigger-body"
        | "body"
        | "caption";
}
