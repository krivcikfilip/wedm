import * as Styled from "./styled";

/**
 * Icon component
 */
export const Icon = ({ name }: IconProps) => {
    return (
        <Styled.Wrapper>
            <use xlinkHref={`/assets/images/sprite.svg#${name}`} />
        </Styled.Wrapper>
    );
};

export interface IconProps {
    name: IconName;
}

export type IconName = "arrow" | "menu" | "close";
