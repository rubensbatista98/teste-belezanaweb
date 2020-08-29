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
  const payment = useSelector((state) => state.payment);

  if (!items.length) return <Redirect to="/carrinho" />;
  if (!payment) return <Redirect to="/pagamento" />;

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
              <p>{payment?.cardNumber}</p>
              <p>{payment?.cardName}</p>
              <p>{payment?.expirationDate}</p>
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
