import React from "react";
import { useRouteMatch, withRouter } from "react-router-dom";

const Header = () => {
  console.log(useRouteMatch());
  return <h1>hhhww</h1>;
};

export default withRouter(Header);
