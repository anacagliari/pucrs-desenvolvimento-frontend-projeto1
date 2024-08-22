[...]deve ter uma breve explicação sobre como executar o projeto e uma descrição do que cada componente realiza. Você também pode utilizar este arquivo para documentar suas decisões no desenvolvimento do projeto.[...]
`Critérios de Avaliação:` Documentação de referência: 0.5
O projeto está acompanhado de documentação (README.md) clara e objetiva (explica todos os passos para rodar a aplicação desde o npm install), bem estruturada e com escrita adequada (seguindo o template fornecido, contendo a identificação do aluno e uma descrição do que cada componente realiza e apresentando prints de como a aplicação ficou).

# Nome: `Ana Caroline Cagliari Cappellari`

Descrição do Projeto: Breve introdução sobre o que o projeto faz.
Como Executar o Projeto: Instruções para clonar o repositório, instalar dependências, e rodar o projeto.
Descrição dos Componentes: Explicação breve sobre o que cada componente faz.
Imagens/Screenshots: Prints das telas do projeto funcionando.

## Como Executar
1. Entre pasta pucrs-projeto1 no terminal:
```
cd exemplos/pucrs-projeto1
```

2. Navegue até o diretório do projeto.
```
cd pucrs-projeto1
```

3. Rode npm install para instalar as dependências do projeto:
```
npm i --save @fortawesome/react-fontawesome@latest
npm i --save @fortawesome/free-solid-svg-icons
npm install bootstrap
```

4. E em seguida, npm start, para iniciar a execução do projeto.
```
npm start
```

## Introdução

Este projeto contém uma estrutura básica a partir do template CRA, sem muitas alterações, com o objetivo de demostrar como compartilhar o estado de uma aplicação utilizando React Router e React Context API.

## Componentes
### Navbar
Contém os links de navegação para diferentes seções da aplicação.

### CarForm
Formulário utilizado para adicionar e editar carros. Valida as entradas e exibe feedback para o usuário.

### CarsList
Lista os carros cadastrados, permitindo a exclusão e edição dos mesmos.

## Screenshots
![Página inicial Page](..\public\img\Home.JPG)
![Sobre Page](pucrs-projeto1\public\img\About.JPG)
![Lista de Carros Page](pucrs-projeto1\public\img\Cars.JPG)
![Adicionar Carro Page](pucrs-projeto1\public\img\AddCars.JPG)
![Editar Carro Page](pucrs-projeto1/public/img/EditCars-Confirm.JPG)
![Excluir Carro Page](pucrs-projeto1/public/img/DeleteCars-Confirm.JPG)

## Componentes

Os componentes estão no diretório `./src/Components` e eles possuem as seguintes características:
- ChildrenComponent:
  - `props`
    - items: um array com uma lista de dados para ser mostrado;
    - onAdd: callback que é chamado quando o botão "Adicionar algo" é clicado;
  - Descrição: este componente é uma simples demostração de como utilizar callback para adicionar itens em um array e como listar este array.

- List:
  - Descrição: este componente renderiza o ChildrenComponent a partir dos dados presentes no contexto e também é responsável por disparar as mudanças no contexto.

- Navbar:
  - Descrição: este componente utiliza Link do React Router para mostrar as páginas disponíveis em uma barra de navegação

## Conclusão

Este projeto é apenas para fins demonstrativos e não contém mais alterações do que as necessárias para demostrar algumas funcionalidades úteis para o desenvolvimento de projetos em ReactJS.
