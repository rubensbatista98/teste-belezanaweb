import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback="Carregando...">
          <Routes />
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
