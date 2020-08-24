import React from "react";

import SectionPanel from "../../components/SectionPanel";
import PurchaseSummary from "../../components/PurchaseSummary";
import PaymentForm from "../../components/PaymentForm";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

import * as S from "./styles";

const Payment = () => {
  return (
    <Container>
      <SectionPanel title="Cartão de Credito">
        <PaymentForm />
      </SectionPanel>

      <S.Wrapper>
        <PurchaseSummary />

        <Button to="/sucesso" children="Finalizar o pedido" />
      </S.Wrapper>
    </Container>
  );
};

export default Payment;
