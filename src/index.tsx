import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { UsersProvider } from "./hooks/useUsers";
import { client } from "./lib/apollo";
import { GlobalStyle } from "./styles/global";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <UsersProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <GlobalStyle />
      </UsersProvider>
    </ApolloProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
