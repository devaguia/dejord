import React from "react";

import { Container } from "./styles";

const Renda: React.FC = () => {
  const _prefix = "renda-";
  return (
    <Container>
    <div className="title">
      <span>Saúde</span>
    </div>
    <div className="fields">
      <div className="field field-lg field-lg-l">
        <input type="text" placeholder="Cicatriz" id={_prefix + "scar"}  name={_prefix + "scar"} />
      </div>
      <div className="field field-lg field-lg-r">
        <input type="text" placeholder="Crença" id={_prefix + "belief"}  name={_prefix + "belief"} />
      </div>
    </div>
  </Container>
  );
};

export default Renda;
