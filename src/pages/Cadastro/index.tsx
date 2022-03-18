import React from "react";

import { Container, Box, Content } from "./styles";

import Header from "../../components/Header";
import PersonalData from "../../components/PersonalData";
import AnswerableData from "../../components/AnswerableData";

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Header title="Cadastro" />
      <Box>
        <Content>
          <PersonalData />
        </Content>
      </Box>
      <Box>
        <Content>
          <AnswerableData />
        </Content>
      </Box>
    </Container>
  );
};

export default Cadastro;
