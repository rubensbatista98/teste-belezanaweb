import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import SectionPanel from "../../components/SectionPanel";
import ItemsList from "../../components/ItemsList";
import PurchaseSummary from "../../components/PurchaseSummary";
import Container from "../../ui/Container";

import * as S from "./styles";

const Success = () => {
  const { items } = useSelector((state) => state.cart);

  if (!items.length) return <Redirect to="carrinho" />;

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
            <ItemsList items={items} />
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
