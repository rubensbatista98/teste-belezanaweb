import React from "react";
import { useSelector } from "react-redux";

import SectionPanel from "../../components/SectionPanel";
import ItemsList from "../../components/ItemsList";
import PurchaseSummary from "../../components/PurchaseSummary";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

import * as S from "./styles";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  if (!items.length) return <S.Message>Carrinho vazio!</S.Message>;

  return (
    <Container as="main">
      <SectionPanel title="Produtos">
        <ItemsList items={items} />
      </SectionPanel>

      <S.Wrapper>
        <PurchaseSummary />

        <Button to="/pagamento" children="Seguir para o pagamento" />
      </S.Wrapper>
    </Container>
  );
};

export default Cart;
