import React, { useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import media from "styled-media-query";

import Header from "./components/Header";
import Spinner from "./ui/Spinner";
import Routes from "./routes";

import cartActions from "./store/reducers/cart/actions";

function App() {
  const { isLoading, error } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      cartActions.getCartRequest(
        "http://www.mocky.io/v2/5b15c4923100004a006f3c07"
      )
    );
  }, [dispatch]);

  if (error)
    return (
      <Error>
        Desculpe, mas houve um erro. <br /> Tente novamente mais tarde.
      </Error>
    );

  if (isLoading) return <Spinner />;

  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<Spinner />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
}

const Error = styled.h1`
  line-height: 2;
  text-align: center;
  margin-top: 50px;
  font-size: ${({ theme }) => theme.main.typography.text.sizes[4]};

  ${media.greaterThan("medium")`
  font-size: ${({ theme }) => theme.main.typography.text.sizes[5]};
  `}
`;

export default App;
