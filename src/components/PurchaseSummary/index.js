import React from "react";
import { useSelector } from "react-redux";

import * as S from "./styles";

const PurchaseSummary = () => {
  const cart = useSelector((state) => state.cart);

  const { subTotal, shippingTotal, discount, total } = cart;

  return (
    <S.Container>
      <S.Item>
        <span>Produtos</span>
        <span>R$ {subTotal}</span>
      </S.Item>

      <S.Item>
        <span>Frete</span>
        <span>R$ {shippingTotal}</span>
      </S.Item>

      <S.Item highlight>
        <span>Desconto</span>
        <span>R$ {discount}</span>
      </S.Item>

      <S.Item>
        <strong>Total</strong>
        <strong>R$ {total}</strong>
      </S.Item>
    </S.Container>
  );
};

export default PurchaseSummary;
