import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Spacer } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex border="1px solid black" flexDirection="column" width="50%" margin="auto" justifyContent="center">
      <AddProduct />
      <Grid>
        <Product />
      </Grid>

      <Pagination />
    </Flex>
  );
};

export default Products;
