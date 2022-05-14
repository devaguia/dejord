import React from "react";
import Documentos from "./Documentos";
import Domicilio from "./Domicilio";
import Endereco from "./Endereco";
import Juridico from "./Juridico";
import Paciente from "./Paciente";
import Renda from "./Renda";
import Responsavel from "./Responsavel";

import { Container } from "./styles";

const Register: React.FC = () => {
  const _prefix = "cadastro-";
  return (
    <Container>
      <Documentos/>
      <Domicilio/>
      <Endereco/>
      <Juridico/>
      <Paciente/>
      <Renda/>
      <Responsavel/>
    </Container>
  );
};

export default Register;
