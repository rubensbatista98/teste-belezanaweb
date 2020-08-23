import React from "react";

import SectionPanel from "../../components/SectionPanel";
import PurchaseSummary from "../../components/PurchaseSummary";
import Container from "../../ui/Container";
import Button from "../../ui/Button";

import * as S from "./styles";

const Payment = () => {
  return (
    <Container>
      <SectionPanel title="Cartão de Credito">
        <form>
          <section>
            <label htmlFor="credit_card">Número do cartão:</label>
            <input
              type="text"
              id="credit_card"
              placeholder="____.____.____.____"
            />
          </section>

          <section>
            <label htmlFor="name">Nome do Titular:</label>
            <input type="text" id="name" placeholder="Como no cartão" />
          </section>

          <div>
            <section>
              <label htmlFor="validate">Validade (mês/ano):</label>
              <input type="text" id="validate" placeholder="__/____" />
            </section>

            <section>
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" placeholder="___" />
            </section>
          </div>
        </form>
      </SectionPanel>

      <S.Wrapper>
        <PurchaseSummary />

        <Button to="/sucesso" children="Finalizar o pedido" />
      </S.Wrapper>
    </Container>
  );
};

export default Payment;
