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
        <div>
          <div className="field">
            <input
              type="text"
              placeholder="Plano de saúde"
              id={_prefix + "plano_saude"}
              name={_prefix + "plano_saude"}
            />
          </div>
          <div className="field">
            <input
              type="text"
              placeholder="Acompanhamento médico"
              id={_prefix + "acompanhamento_medico"}
              name={_prefix + "acompanhamento_medico"}
            />
          </div>
        </div>
        <div>
          <div className="field">
            <div>
              <span>Última consulta</span>
            </div>
            <input
              type="text"
              placeholder="Motivo"
              id={_prefix + "ultima_consulta_motivo"}
              name={_prefix + "ultima_consulta_motivo"}
            />
          </div>
          <div className="field">
            <input
              type="data"
              placeholder="Data"
              id={_prefix + "ultima_consulta_data"}
              name={_prefix + "ultima_consulta_data"}
            />
          </div>
        </div>
        <div>
          <div className="field">
            <div>
              <span>Exame de rotina</span>
            </div>
            <input
              type="text"
              placeholder="Motivo"
              id={_prefix + "exame_rotina_motivo"}
              name={_prefix + "exame_rotina_motivo"}
            />
          </div>
          <div className="field">
            <input
              type="data"
              placeholder="Data"
              id={_prefix + "exame_rotina_data"}
              name={_prefix + "exame_rotina_data"}
            />
          </div>
        </div>
        <div>
          <div className="field">
            <div>
              <span>Dentista</span>
            </div>
            <input
              type="text"
              placeholder="Motivo"
              id={_prefix + "dentista_motivo"}
              name={_prefix + "dentista_motivo"}
            />
          </div>
          <div className="field">
            <input
              type="data"
              placeholder="Data"
              id={_prefix + "dentista_data"}
              name={_prefix + "dentista_data"}
            />
          </div>
        </div>
        <div>
          <div className="field">
            <div>
              <span>Medicamentos</span>
            </div>
            <input
              type="text"
              placeholder="Nome do Medicamento"
              id={_prefix + "medicamento_nome"}
              name={_prefix + "medicamento_nome"}
            />
          </div>
          <div className="field">
            <input
              type="button"
              className="btn btn-add"
              value="Adicionar Medicamento"
              id={_prefix + "add_medicamento"}
            />
          </div>
        </div>
        <div>
          <div className="field">
            <div>
              <span>Doenças</span>
            </div>
            <input
              type="text"
              placeholder="Nome"
              id={_prefix + "doenca_nome"}
              name={_prefix + "doenca_nome"}
            />
          </div>
          <div className="field">
            <input
              type="button"
              className="btn btn-add"
              value="Adicionar Doença"
              id={_prefix + "add_doenca"}
            />
          </div>
        </div>
        <div>
          <div className="field">
            <input
              type="checkbox"
              id={_prefix + "teste_hiv"}
              name={_prefix + "teste_hiv"}
            />
            <label htmlFor={_prefix + "teste_hiv"}>Teste de HIV</label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id={_prefix + "relacoes_sexuais"}
              name={_prefix + "relacoes_sexuais"}
            />
            <label htmlFor={_prefix + "relacoes_sexuais"}>
              Relações Homossexuais
            </label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id={_prefix + "ansiedade"}
              name={_prefix + "ansiedade"}
            />
            <label htmlFor={_prefix + "ansiedade"}>Ansiedade</label>
          </div>
          <div className="field">
            <input
              type="checkbox"
              id={_prefix + "depressao"}
              name={_prefix + "depressao"}
            />
            <label htmlFor={_prefix + "depressao"}>Depressão</label>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Renda;
