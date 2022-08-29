import styled, { css } from "styled-components";

import { TextProps } from "@/components/core";

export const Wrapper = styled.span<StyledTextProps>`
    font-weight: ${({ weight }) => weight};

    ${(props) => parseSizeVariant(props)}
`;

const parseSizeVariant = (props: StyledTextProps) => {
    switch (props.size) {
        case "headline": {
            return css`
                font-size: 80px;
                line-height: 96px;

                @media (max-width: 700px) {
                    font-size: 55px;
                    line-height: 76px;
                }
            `;
        }
        case "bigger-title": {
            return css`
                font-size: 48px;
                line-height: 58px;

                @media (max-width: 700px) {
                    font-size: 40px;
                    line-height: 58px;
                }
            `;
        }
        case "title": {
            return css`
                font-size: 24px;
                line-height: 38px;
            `;
        }
        case "smaller-title": {
            return css`
                font-size: 21px;
                line-height: 38px;
            `;
        }
        case "bigger-body": {
            return css`
                font-size: 18px;
                line-height: 24px;
            `;
        }
        case "body": {
            return css`
                font-size: 16px;
                line-height: 30px;
            `;
        }
        case "caption": {
            return css`
                font-size: 13px;
                line-height: 18px;
            `;
        }
    }
};

type StyledTextProps = Pick<TextProps, "size" | "weight">;
