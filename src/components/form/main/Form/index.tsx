import { Formik, FormikConfig } from "formik";
import { FormikProps } from "formik";
import { ReactNode } from "react";

import * as Styled from "./styled";

/**
 * Form component
 */
export const Form = ({ children, ...props }: FormProps) => {
    return (
        <Formik {...props}>
            {(formikProps) => (
                <Styled.Wrapper>
                    {typeof children === "function"
                        ? children(formikProps)
                        : children}
                </Styled.Wrapper>
            )}
        </Formik>
    );
};

interface FormProps extends FormikConfig<any> {
    children: ReactNode | ((formikProps: FormikProps<any>) => ReactNode);
}
