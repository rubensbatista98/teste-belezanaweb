import React from "react";

const IMAGE_URL =
  "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/1/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png";

const Success = () => {
  return (
    <div>
      <div>
        <span></span>
        <h1>Compra efetuada com sucesso</h1>
      </div>

      <section>
        <h2>Pagamento</h2>

        <div>
          <p>****.****.****.1234</p>
          <p>JOSÉ DA SILVA</p>
          <p>05/2019</p>
        </div>
      </section>

      <section>
        <h2>Produtos</h2>

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
    </div>
  );
};

export default Success;
