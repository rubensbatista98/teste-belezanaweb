import React from "react";
import { Link } from "react-router-dom";

import SectionPanel from "../../components/SectionPanel";
import ItemsList from "../../components/ItemsList";

const Cart = () => {
  return (
    <div>
      <SectionPanel title="Produtos">
        <ItemsList />
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
