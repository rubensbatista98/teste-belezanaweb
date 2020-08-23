import React from "react";

import * as S from "./styles";

const resumeData = {
  subTotal: 624.8,
  shippingTotal: 5.3,
  discount: 30,
  total: 618.9,
};

const PurchaseSummary = () => {
  const { subTotal, shippingTotal, discount, total } = resumeData;

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
