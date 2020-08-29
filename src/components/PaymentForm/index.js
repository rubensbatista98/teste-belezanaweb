import React, { useMemo, useCallback, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import FormikControl from "./FormikControl";
import validationSchema from "./schema";

import paymentActions from "../../store/reducers/payment/actions";

import { InputGroup } from "./styles";

const PaymentForm = (_, ref) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const initialValues = useMemo(
    () => ({
      cardNumber: "",
      cardName: "",
      expirationDate: "",
      cvv: "",
    }),
    []
  );

  const onSubmit = useCallback(
    (values) => {
      dispatch(paymentActions.addPayment(values));
      history.push("/sucesso");
    },
    [dispatch, history]
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnMount={true}
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
