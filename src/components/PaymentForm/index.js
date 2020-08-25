import React, { useMemo, useCallback, forwardRef } from "react";
import { Formik, Form } from "formik";

import FormikControl from "./FormikControl";
import validationSchema from "./schema";

import { InputGroup } from "./styles";

const PaymentForm = (_, ref) => {
  const initialValues = useMemo(
    () => ({
      cardNumber: "",
      cardName: "",
      expirationDate: "",
      cvv: "",
    }),
    []
  );

  const onSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={onSubmit}
      innerRef={ref}
    >
      <Form>
        <FormikControl
          type="text"
          label="Número do cartão:"
          name="cardNumber"
          placeholder="____.____.____.____"
        />

        <FormikControl
          type="text"
          label="Nome do Titular:"
          name="cardName"
          placeholder="Como no cartão"
        />

        <InputGroup>
          <FormikControl
            type="text"
            label="Validade (mês/ano):"
            name="expirationDate"
            placeholder="__/____"
          />

          <FormikControl
            type="text"
            label="CVV:"
            name="cvv"
            placeholder="___"
          />
        </InputGroup>
      </Form>
    </Formik>
  );
};

export default forwardRef(PaymentForm);
