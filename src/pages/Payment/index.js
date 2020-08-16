import React from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div>
      <section>
        <h1>Cartão de Credtio</h1>

        <div>
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
        </div>
      </section>

      <section>
        <div>
          <span>Produtos</span>
          <span>R$ 624,80</span>
        </div>

        <div>
          <span>Frete</span>
          <span>R$ 5,30</span>
        </div>

        <div>
          <strong>Total</strong>
          <strong>R$ 600,10</strong>
        </div>
      </section>

      <Link to="/sucesso" children="Finalizar o pedido" />
    </div>
  );
};

export default Payment;
