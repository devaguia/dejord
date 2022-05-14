import React from "react";
import Caracteristicas from "./Caracteristicas";
import Dependencias from "./Dependencias";
import Saude from "./Saude";

import { Container } from "./styles";

const Paciente: React.FC = () => {
  const _prefix = "pacient-";

  return (
    <Container>
      <Caracteristicas/>
      <Dependencias/>
      <Saude/>
    </Container>
  );
};

export default Paciente;
