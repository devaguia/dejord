import React from "react";
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
      <Paciente/>
      <Responsavel/>
    </Container>
  );
};

export default Register;
