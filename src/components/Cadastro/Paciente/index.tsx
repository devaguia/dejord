import React from "react";
import Endereco from "../Endereco";
import Caracteristicas from "./Caracteristicas";
import DadosPessoais from "./DadosPessoais";
import Dependencias from "./Dependencias";
import Documentos from "./Documentos";
import Saude from "./Saude";

import { Container } from "./styles";

const Paciente: React.FC = () => {
  const _prefix = "pacient-";

  return (
    <Container>
      <DadosPessoais/>
      <Endereco />
      <Documentos />
      <Caracteristicas/>
      <Dependencias/>
      <Saude/>
    </Container>
  );
};

export default Paciente;
