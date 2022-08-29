import { useField } from "formik";

import { PropsWithChildren } from "@/types";

import * as Styled from "./styled";

/**
 * Form group component
 */
export const FormGroup = ({ name, children }: FormGroupProps) => {
    const [_, fieldMeta] = useField(name);

    const isError = Boolean(fieldMeta.touched && fieldMeta.error);

    return (
        <Styled.Wrapper isError={isError}>
            <Styled.Body>{children}</Styled.Body>
            {isError && (
                <Styled.Error size="caption" weight={500}>
                    {fieldMeta.error}
                </Styled.Error>
            )}
        </Styled.Wrapper>
    );
};

interface FormGroupProps extends PropsWithChildren {
    name: string;
}
