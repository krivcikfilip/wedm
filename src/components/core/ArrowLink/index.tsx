import React from "react";

import { Icon, Text } from "@/components/core";

import * as Styled from "./styled";

/**
 * Arrow link component
 */
export const ArrowLink = () => {
    return (
        <Styled.Wrapper>
            <Text size="caption">Zobrazit více</Text>
            <Icon name="arrow" />
        </Styled.Wrapper>
    );
};
