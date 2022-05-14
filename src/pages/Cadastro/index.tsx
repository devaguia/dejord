import React from "react";

import { Container, Body } from "./styles";

import Header from "../../components/Header";
import Register from "../../components/Cadastro";

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Header title="Cadastro" />
      <Body>
        <Register/>
      </Body>
    </Container>
  );
};

export default Cadastro;
