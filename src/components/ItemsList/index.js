import React, { memo } from "react";

import ProductItem from "./ProductItem";

const ItemsList = ({ items }) => {
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

export default memo(ItemsList);
