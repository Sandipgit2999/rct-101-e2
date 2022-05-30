import React from "react";
import Products from "./components/Products";
import { Container } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import AddProduct from "./components/AddProduct";

const App = () => {
  return (
    <div>
      <Products />
    </div>
  );
};

export default App;
