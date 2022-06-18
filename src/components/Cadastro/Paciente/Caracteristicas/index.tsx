import React from "react";

import { Container } from "./styles";

const Caracteristicas: React.FC = () => {
  const _prefix = "caracteristicas-";
  return (
    <Container>
    <div className="title">
      <span>Características</span>
    </div>
    <div className="fields">
      <div className="field">
        <input type="text" placeholder="Altura" id={_prefix + "height"}  name={_prefix + "height"} />
      </div>
      <div className="field">
        <input type="text" placeholder="Peso" id={_prefix + "weight"}  name={_prefix + "weight"} />
      </div>
      <div className="field">
        <input type="text" placeholder="Etnia" id={_prefix + "ethnicity"}  name={_prefix + "ethnicity"} />
      </div>
      <div className="field">
        <input type="text" placeholder="Cabelo" id={_prefix + "hair"}  name={_prefix + "hair"} />
      </div>
      <div className="field">
        <input type="text" placeholder="Olhos" id={_prefix + "eyes"}  name={_prefix + "eyes"} />
      </div>
      <div className="field field-lg field-lg-l">
        <input type="text" placeholder="Cicatriz" id={_prefix + "scar"}  name={_prefix + "scar"} />
      </div>
      <div className="field field-lg field-lg-m">
        <input type="text" placeholder="Deficiencia" id={_prefix + "deficiency"}  name={_prefix + "deficiency"} />
      </div>
      <div className="field field-lg field-lg-r">
        <input type="text" placeholder="Crença" id={_prefix + "belief"}  name={_prefix + "belief"} />
      </div>
    </div>
  </Container>
  );
};

export default Caracteristicas;
