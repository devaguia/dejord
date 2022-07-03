import React from "react";
import Button from "../../Button";

import { Container } from "./styles";

const Submit: React.FC = () => {
  return (
    <Container>
      <div>
        <Button type="button" value="Cancelar"/>
        <Button type="submit" value="Cadastrar"/>
      </div>
    </Container>
  );
};

export default Submit;
