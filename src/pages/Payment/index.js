import React, { useRef, useCallback } from "react";
import { useHistory } from "react-router-dom";

import SectionPanel from "../../components/SectionPanel";
import PurchaseSummary from "../../components/PurchaseSummary";
import PaymentForm from "../../components/PaymentForm";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

import * as S from "./styles";

const Payment = () => {
  const formRef = useRef(null);
  const history = useHistory();

  const handleClick = useCallback(async () => {
    const formik = formRef.current;

    if (formik) {
      await formik.submitForm();

      if (formik.isValid) history.replace("sucesso");
    }
  }, [history]);

  return (
    <Container>
      <SectionPanel title="Cartão de Credito">
        <PaymentForm ref={formRef} />
      </SectionPanel>

      <S.Wrapper>
        <PurchaseSummary />

        <Button
          as="button"
          children="Finalizar o pedido"
          onClick={handleClick}
        />
      </S.Wrapper>
    </Container>
  );
};

export default Payment;
