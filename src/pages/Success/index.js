import React from "react";

import SectionPanel from "../../components/SectionPanel";
import ItemsList from "../../components/ItemsList";
import PurchaseSummary from "../../components/PurchaseSummary";
import Container from "../../ui/Container";

import * as S from "./styles";

const Success = () => {
  return (
    <S.Container>
      <S.SuccessMessage>
        <S.Icon />
        <h1>Compra efetuada com sucesso</h1>
      </S.SuccessMessage>

      <Container>
        <div style={{ flexGrow: 1 }}>
          <SectionPanel title="Pagamento">
            <S.PaymentData>
              <p>****.****.****.1234</p>
              <p>José da Silva</p>
              <p>05/2019</p>
            </S.PaymentData>
          </SectionPanel>

          <SectionPanel title="Produtos">
            <ItemsList />
          </SectionPanel>
        </div>

        <S.Wrapper>
          <PurchaseSummary />
        </S.Wrapper>
      </Container>
    </S.Container>
  );
};

export default Success;
