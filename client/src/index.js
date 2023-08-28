import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ModalRoot from "./components/Modal/ModalRoot";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movie-app-2-13fb90b27d3b.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ModalRoot />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
