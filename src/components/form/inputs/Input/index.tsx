import { useField } from "formik";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";

import * as Styled from "./styled";

/**
 * Input component
 */
export const Input = ({ textarea, ...props }: InputProps) => {
    return (
        <Styled.Wrapper>
            <Styled.Field as={textarea ? "textarea" : "input"} {...props} />
        </Styled.Wrapper>
    );
};

/**
 * Input component for form
 */
export const FormInput = (props: FormInputProps) => {
    const [field] = useField(props.name);

    return <Input {...props} {...field} />;
};

interface InputProps {
    name: string;
    value: string;
    placeholder?: string;
    textarea?: boolean;
    type?: HTMLInputTypeAttribute;
    onChange: (e: ChangeEvent<any>) => void;
}

type FormInputProps = Omit<InputProps, "value" | "onChange">;
