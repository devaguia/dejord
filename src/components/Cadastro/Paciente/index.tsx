import React from "react";
import Contato from "../Contato";
import Endereco from "../Endereco";
import Caracteristicas from "./Caracteristicas";
import DadosPessoais from "./DadosPessoais";
import Dependencias from "./Dependencias";
import Documentos from "./Documentos";
import Saude from "./Saude";

import { Container } from "./styles";

const Paciente: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Dados do Paciente</h2>
      </div>
      <DadosPessoais />
      <Caracteristicas />
      <Saude />
      <Dependencias />
      <Endereco title="Endereço" />
      <Contato title="Contato" />
      <Documentos />
      <Dependencias />
    </Container>
  );
};

export default Paciente;
