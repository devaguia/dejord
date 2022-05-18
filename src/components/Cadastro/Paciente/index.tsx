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
      <div>
        <h2>Dados do Paciente</h2>
      </div>
      <DadosPessoais/>
      <Endereco title="Endereço"/>
      <Documentos />
      <Caracteristicas/>
      <Dependencias/>
      <Saude/>
    </Container>
  );
};

export default Paciente;
