import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Suspense fallback="Carregando...">
          <Routes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
