import React from "react";

import * as S from "./styles";

const PaymentForm = () => {
  return (
    <form>
      <S.InputBlock>
        <S.Label htmlFor="credit_card">Número do cartão:</S.Label>
        <S.Input
          type="text"
          id="credit_card"
          placeholder="____.____.____.____"
        />
      </S.InputBlock>

      <S.InputBlock>
        <S.Label htmlFor="name">Nome do Titular:</S.Label>
        <S.Input type="text" id="name" placeholder="Como no cartão" />
      </S.InputBlock>

      <S.InputGroup>
        <S.InputBlock>
          <S.Label htmlFor="validate">Validade (mês/ano):</S.Label>
          <S.Input type="text" id="validate" placeholder="__/____" />
        </S.InputBlock>

        <S.InputBlock>
          <S.Label htmlFor="cvv">CVV:</S.Label>
          <S.Input type="text" id="cvv" placeholder="___" />
        </S.InputBlock>
      </S.InputGroup>
    </form>
  );
};

export default PaymentForm;
