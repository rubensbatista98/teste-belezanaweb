import React from "react";
import { Link } from "react-router-dom";

const IMAGE_URL =
  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png";

const Cart = () => {
  return (
    <div>
      <section>
        <h1>Produtos</h1>

        <div>
          <article>
            <img src={IMAGE_URL} alt="Produto" />

            <div>
              <h3>
                L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
              </h3>

              <strong>R$ 225,90</strong>
            </div>
          </article>

          <article>
            <img src={IMAGE_URL} alt="Produto" />

            <div>
              <h3>
                L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
              </h3>

              <strong>R$ 225,90</strong>
            </div>
          </article>

          <article>
            <img src={IMAGE_URL} alt="Produto" />

            <div>
              <h3>
                L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium
              </h3>

              <strong>R$ 225,90</strong>
            </div>
          </article>
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

      <Link to="/pagamento" children="Seguir para o pagamento" />
    </div>
  );
};

export default Cart;
