import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Cart = lazy(() => import("./pages/Cart"));
const Payment = lazy(() => import("./pages/Payment"));
const Success = lazy(() => import("./pages/Success"));

const Routes = () => (
  <Switch>
    <Route exact path="/carrinho" component={Cart} />
    <Route exact path="/pagamento" component={Payment} />
    <Route exact path="/sucesso" component={Success} />

    <Redirect to="/carrinho" />
  </Switch>
);

export default Routes;
