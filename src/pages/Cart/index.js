import React from "react";
import { Link } from "react-router-dom";

import SectionPanel from "../../components/SectionPanel";

const items = [
  {
    quantity: 1,
    product: {
      sku: "24410",
      name:
        "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
      imageObjects: [
        {
          small:
            "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
        },
      ],
      priceSpecification: {
        sku: "24410",
        price: 225.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18,
      },
    },
  },
  {
    quantity: 1,
    product: {
      sku: "24410",
      name:
        "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
      imageObjects: [
        {
          small:
            "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
        },
      ],
      priceSpecification: {
        sku: "24410",
        price: 225.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18,
      },
    },
  },
  {
    quantity: 1,
    product: {
      sku: "24410",
      name:
        "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
      imageObjects: [
        {
          small:
            "https://res.cloudinary.com/beleza-na-web/image/upload/f_auto,fl_progressive,q_auto:best/v1/imagens/2/loreal-professionnel-expert-absolut-repair-cortex-lipidium-mascara-de-reconstrucao-500g-24410-963234120108391775.png",
        },
      ],
      priceSpecification: {
        sku: "24410",
        price: 225.9,
        originalPrice: 225.9,
        maxPrice: 243.9,
        percent: 7,
        discount: 18,
      },
    },
  },
];

const Cart = () => {
  return (
    <div>
      <SectionPanel title="Produtos">
        {items.map((item) => (
          <article key={item.product.sku}>
            <img
              src={item.product.imageObjects[0].small}
              alt={item.product.name}
            />

            <div>
              <h3>{item.product.name}</h3>

              <strong>R$ {item.product.priceSpecification.price}</strong>
            </div>
          </article>
        ))}
      </SectionPanel>

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
