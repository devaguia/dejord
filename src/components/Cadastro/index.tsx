import React from "react";
import Dependentes from "./Dependentes";
import Domicilio from "./Domicilio";
import GrupoFamiliar from "./GrupoFamiliar";
import Paciente from "./Paciente";
import Renda from "./Renda";
import Responsavel from "./Responsavel";

import { Container } from "./styles";
import Submit from "./Submit";

const Register: React.FC = () => {
  return (
    <Container>
      <Paciente />
      <Responsavel />
      <Renda />
      <Dependentes />
      <GrupoFamiliar />
      <Domicilio />
      <Submit />
    </Container>
  );
};

export default Register;
