import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Header from "../../components/Header";
import InternList from "../../components/InternList";

import { Container, Search, SearchIcon, List } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Pacientes" />

      <Search>
        <div className="search-section">
          <SearchIcon />
          <input
            type="text"
            id="search-input"
            placeholder="Digite para filtrar"
          />
        </div>
        <div className="action-section">
          <Link to={`/cadastro`}>
            <Button type="button" value="Novo Paciente" />
          </Link>
        </div>
      </Search>

      <List>
        <ul>
          <li>Código</li>
          <li>Data</li>
          <li>Nome</li>
          <li>Idade</li>
          <li>CPF</li>
          <li></li>
          <li></li>
        </ul>
      </List>
      <div>
        {[1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => (
          <InternList
            id={12356}
            date={"10/10/2022"}
            name={"João da Silva Junior"}
            age={20}
            cpf={"132.456.789-10"}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
