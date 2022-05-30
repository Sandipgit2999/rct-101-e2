import React from "react";
import { Stack, Image, Text,Tag,TagLabel,Heading,Box } from "@chakra-ui/react";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" />
      <Text data-cy="product-category">asdf</Text>
      <Tag>
        <TagLabel data-cy="product-gender">male</TagLabel>
      </Tag>
      <Heading data-cy="product-title">shirt</Heading>
      <Box data-cy="product-price">dsgdh</Box>
    </Stack>
  );
};

export default Product;
