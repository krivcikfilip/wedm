import { Icon, Text } from "@/components/core";

import * as Styled from "./styled";

/**
 * Button component
 */
export const Button = ({
    value,
    isLoading,
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <Styled.Wrapper
            onClick={onClick}
            disabled={isLoading}
            value={value}
            {...props}
            className="hvr-underline-from-left"
        >
            <Text weight={600}>{value}</Text>
            <Icon name="arrow" />
        </Styled.Wrapper>
    );
};

export interface ButtonProps {
    value: string;
    isLoading?: boolean;
    disabled?: boolean;
    type?: "submit" | "button";
    onClick?: () => void;
}
