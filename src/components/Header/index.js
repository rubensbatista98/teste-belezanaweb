import React from "react";
import { useRouteMatch } from "react-router-dom";

const Header = () => {
  const route = useRouteMatch();

  return (
    <header>
      <strong active={route.path === "carrinho"}>Sacola</strong>
      <strong active={route.path === "pagamento"}>Pagamento</strong>
      <strong active={route.path === "sucesso"}>Confirmação</strong>
    </header>
  );
};

export default Header;
