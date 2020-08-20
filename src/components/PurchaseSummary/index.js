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
        <S.Label>Produtos</S.Label>
        <S.Value>R$ {subTotal}</S.Value>
      </S.Item>

      <S.Item>
        <S.Label>Frete</S.Label>
        <S.Value>R$ {shippingTotal}</S.Value>
      </S.Item>

      <S.Item highlight>
        <S.Label>Desconto</S.Label>
        <S.Value>R$ {discount}</S.Value>
      </S.Item>

      <S.Item>
        <S.Label as="strong">Total</S.Label>
        <S.Value as="strong">R$ {total}</S.Value>
      </S.Item>
    </S.Container>
  );
};

export default PurchaseSummary;
