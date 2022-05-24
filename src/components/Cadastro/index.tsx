import React from "react";
import Dependentes from "./Dependentes";
import Domicilio from "./Domicilio";
import GrupoFamiliar from "./GrupoFamiliar";
import Paciente from "./Paciente";
import Renda from "./Renda";
import Responsavel from "./Responsavel";

import { Container } from "./styles";

const Register: React.FC = () => {
  const _prefix = "cadastro-";
  return (
    <Container>
      <Paciente/>
      <Responsavel/>
      <Renda />
      <Dependentes />
      <GrupoFamiliar />
      <Domicilio />
    </Container>
  );
};

export default Register;
