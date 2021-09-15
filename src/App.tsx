import React from "react";
import "./App.css";
import apolloClient from "./apolloClient";
import { ApolloProvider } from "@apollo/client";
import RandomDogImage from "./components/RandomDogImage";

const App = () => {
  return (
    <div className="App">
      <ApolloProvider client={apolloClient}>
        <RandomDogImage />
      </ApolloProvider>
    </div>
  );
};

export default App;
