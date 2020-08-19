import React from "react";

import ProductItem from "./ProductItem";

const items = [
  {
    quantity: 1,
    product: {
      sku: "2441",
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
      sku: "2410",
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

const ItemsList = () => {
  return (
    <div>
      {items.map((item) => (
        <ProductItem
          key={item.product.sku}
          quantity={item.quantity}
          product={item.product}
        />
      ))}
    </div>
  );
};

export default ItemsList;
