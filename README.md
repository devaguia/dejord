# Dejord

## Descrição
Repositório de uma aplicação criada para realizar o cadastro e controle de pacientes de uma instituição sem fins lucrativos. Esse projeto foi desenvolvido através de um trabalho realizado no curso de Sistemas de Informação na [Universidade Vale do Rio Doce](https://www.univale.br/), situada na cidade de Governador Valadares - MG.

## Ancoras
- [Front-end](#front)
- [Back-end](#back)
- [Instalação](#install)
- [Notas dos desenvolvedores](#notes)

<h2 id="front">Front-end</h2>
O front-end da aplicação foi desenvolvido utilizando o framework <a target="_blank" href="https://reactjs.org/">ReactJS</a>, utilizando o método de styled components para a estilização dos elementos da página.
O React utiliza uma estrutura baseada em componentes, por isso a aplicação também segue esse padrão. Temos duas pastas para o controle desses componentes:

- componentes/
  Basicamente onde vão estar pedações do codigo que provavelmente vão ser reutilizados ou tem a necessidade real ou semântica de estarem separados.

- pages/
  Parte do códgo onde geralmente são chamados os componentes e devem possuir a parte do codigo referente a uma página da aplicação.

É importante lembrar que componentes podem ter subcomponentes.


<h2 id="back">Back-end</h2>
O back-end da nossa aplicação também foi criada com JavaScript, utilizando o <a target="_blank" href="https://nodejs.org/">NodeJs</a> com framework minimalista <a target="_blank" href="https://expressjs.com/">Express</a>. Além disso utilizamos também um banco de dados não relacional: o <a target="_blank" href="https://www.mongodb.com/">MongoDB</a>
 Vale resaltar que toda a parte do back, mesmo estando no mesmo repositório, funciona de forma separada do front e está presente na pasta server, na raiz do projeto.


<h2 id="install">Instalação e Build</h2>

**Instale as dependencias do node com o comando yarn ou npm**
``` 
yarn install
npm install
```

**Para buildar as os estilos**
``` 
## Modo de produção
yarn build
npm run build


## Modo de desenvolvimento
yarn start
npm run start
```

<h2 id="notes">Notas dos desenvolvedores</h2>
Recomendo aos que forem tocar o projeto que estudem a tecnologia [NextJS](https://nextjs.org/). Vai ajudar bastante na integração front e back.
E embora, algumas coisas já estejam definidas no projeto, sintam-se livres para mudar da forma que achar melhor.
Qualquer dúvida podem entrar em contato conosco:
</br>
</br>
- <a target="_blank" href="https://github.com/aguiarrdev/">Matheus[front]</a>
</br>
- <a target="_blank" href="https://www.linkedin.com/in/daniel-victor-327a61197/">Daniel[back]</a>
