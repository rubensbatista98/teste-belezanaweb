import React from "react";
import { useSelector } from "react-redux";

import * as S from "./styles";

import formatPrice from "../../utils/formatPrice";

const PurchaseSummary = () => {
  const cart = useSelector((state) => state.cart);

  const { subTotal, shippingTotal, discount, total } = cart;

  return (
    <S.Container>
      <S.Item>
        <span>Produtos</span>
        <span>{formatPrice(subTotal)}</span>
      </S.Item>

      <S.Item>
        <span>Frete</span>
        <span>{formatPrice(shippingTotal)}</span>
      </S.Item>

      <S.Item highlight>
        <span>Desconto</span>
        <span>{formatPrice(discount)}</span>
      </S.Item>

      <S.Item>
        <strong>Total</strong>
        <strong>{formatPrice(total)}</strong>
      </S.Item>
    </S.Container>
  );
};

export default PurchaseSummary;
