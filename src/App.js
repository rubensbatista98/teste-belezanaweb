import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Header from "./components/Header";

import Routes from "./routes";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />

        <Suspense fallback="Carregando...">
          <Routes />
        </Suspense>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
