import React from "react";
import {
  Button,
  ButtonGroup,
  Select,
  Modal,
  ModalBody,
  Input,
  RadioGroup,
  Radio,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import Styles from "./AddProduct.module.css";




const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const onadd = () => {
    console.log("Hii");
  };

  const onchange=(e)=>{
      console.log(e.target.value);
  }

  

  return (
    <>
    <input type="text" onChange={onchange} data-cy="add-product-title" />
    <div className={Styles.btn}>
      <Button
        margin-left="40%"
        
        my={4}
        data-cy="add-product-button"
      >
        Add New product
      </Button>
      
      <input/>
      <Modal  >
        <ModalBody pb={6}>
          <Input onChange={onchange} data-cy="add-product-title" />
          <Select data-cy="add-product-category">
            <option data-cy="add-product-category-shirt">Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <RadioGroup data-cy="add-product-gender">
            <Radio data-cy="add-product-gender-male">Male</Radio>
            <Radio data-cy="add-product-gender-female">Female</Radio>
            <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
          </RadioGroup>
          <Input data-cy="add-product-price" />
          <Button data-cy="add-product-submit-button">Create</Button>
        </ModalBody>
      </Modal>
      </div>
    </>
  );
};

export default AddProduct;
