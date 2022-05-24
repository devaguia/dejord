import React from "react";

import { Container } from "./styles";

const Domicilio: React.FC = () => {
  const _prefix = "renda-";
  return (
    <Container>
      <div className="title">
        <h2>Domicílio</h2>
      </div>
      <div className="fields fields-benefits">
        <div className="field field-lg field-lg-l">
          <input type="text" placeholder="Localidade" id={_prefix + "locality-residence"}  name={_prefix + "locality-residence"} />
        </div>
        <div className="field field-lg field-lg-l">
          <input type="text" placeholder="Quantidade de quartos" id={_prefix + "rooms-residence"}  name={_prefix + "rooms-residence"} />
        </div>
        <div className="field field-lg field-lg-l">
          <input type="text" placeholder="Quantidade de banheiros" id={_prefix + "bathroom-residence"}  name={_prefix + "bathroom-residence"} />
        </div>
        <div className="field field-lg field-lg-l">
          <input type="checkbox" id={_prefix + "furniture-residence"}  name={_prefix + "furniture-residence"} />
          <label htmlFor={_prefix + "furniture-residence"}>Todos os móveis</label>
        </div>
      </div>
    </Container>
  );
};

export default Domicilio;
