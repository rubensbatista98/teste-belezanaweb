import React from "react";
import { Link } from "react-router-dom";

import SectionPanel from "../../components/SectionPanel";
import ItemsList from "../../components/ItemsList";
import PurchaseSummary from "../../components/PurchaseSummary";

const Cart = () => {
  return (
    <>
      <SectionPanel title="Produtos">
        <ItemsList />
      </SectionPanel>

      <PurchaseSummary />

      <Link to="/pagamento" children="Seguir para o pagamento" />
    </>
  );
};

export default Cart;
