import React from "react";

import { Container, Box, Content } from "./styles";

import Header from "../../components/Header";
import PersonalData from "../../components/PersonalData";
import AnswerableData from "../../components/AnswerableData";
import FamilyIncome from "../../components/FamilyIncome";

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
      <Box>
        <Content>
          <FamilyIncome />
        </Content>
      </Box>
    </Container>
  );
};

export default Cadastro;
