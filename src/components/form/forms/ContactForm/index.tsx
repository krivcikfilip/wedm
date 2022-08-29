import "yup-phone";

import * as Yup from "yup";

import { Button } from "@/components/core";
import { FormInput } from "@/components/form/inputs";
import { Form, FormGroup } from "@/components/form/main";

import * as Styled from "./styled";

/**
 * Contact form
 */
export const ContactForm = () => {
    const onSubmit = async () => {};

    const initialValues = {
        email: "",
        phone: "",
        message: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Neplatný email").required("Povinné pole"),
        phone: Yup.string()
            .phone("CZ", true, "Neplatné telefonní číslo")
            .required("Povinné pole"),
        message: Yup.string().required("Povinné pole"),
    });

    return (
        <Styled.Wrapper>
            <Form
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <FormGroup name="email">
                    <FormInput name="email" type="email" placeholder="Email" />
                </FormGroup>

                <FormGroup name="phone">
                    <FormInput name="phone" placeholder="Telefonní číslo" />
                </FormGroup>

                <FormGroup name="message">
                    <FormInput textarea name="message" placeholder="Zpráva" />
                </FormGroup>

                <Button value="Odeslat" type="submit" />
            </Form>
        </Styled.Wrapper>
    );
};
