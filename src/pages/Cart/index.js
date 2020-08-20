import React from "react";

import SectionPanel from "../../components/SectionPanel";
import ItemsList from "../../components/ItemsList";
import PurchaseSummary from "../../components/PurchaseSummary";
import Button from "../../ui/Button";

const Cart = () => {
  return (
    <>
      <SectionPanel title="Produtos">
        <ItemsList />
      </SectionPanel>

      <PurchaseSummary />

      <Button to="/pagamento" children="Seguir para o pagamento" />
    </>
  );
};

export default Cart;
