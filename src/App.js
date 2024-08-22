import React from 'react';
import About from './Components/About/About';
import CarList from './Components/CarList/CarList';
import Home from './Components/Home/Home';
import MyFooter from './Components/MyFooter/MyFooter';
import MyHeader from './Components/MyHeader/MyHeader';
import NavBar from './Components/NavBar/NavBar';
import NotFound from './Components/NotFound/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export default function App() {

  const renderPage = () => {
    const path = window.location.pathname;

    if (path === "/") {
      return <Home />;
    } else if (path === "/about") {
      return <About />;
    } else if (path === "/cars") {
      return <CarList />;
    } else {
      return <NotFound />;
    }
  };

  return (
    <body className='container App'>
      <MyHeader title="Projeto fase 1 - CRUD para uma coleção de Carrinhos HotWheels" />
      <NavBar />
      <main className="content">
        {renderPage()}
      </main>
      <MyFooter />
    </body>
  );
}

/*Para realizar a fase 1, você precisará: 
•	Criar de um projeto React utilizando Create React App ou outra ferramenta similar;
•	Criar componentes de entrada de dados para o formulário de cadastro;
•	Implementar a validação básica do formulário e feedbacks visuais para o usuário;
•	Implementar funcionalidades dinâmicas, como listagem, busca, criação, atualização e exclusão de forma estática.
 
Nessa primeira fase, você deverá criar um projeto que possa ser executado, para ser visualizado em um navegador. O projeto deve conter componentização, sendo CarList, CarForm e NavBar componentes obrigatórios. 
•	CarList: Componente que lista os carros e que deve receber pelo menos uma lista de carros via props;
•	CarForm: Componente que contém um formulário para adição de carro;
•	NavBar: Componente que contém os links de navegação necessários para a aplicação. 

As telas em questão apresentam uma página inicial, uma página informativa, uma página de cadastro, uma página de listagem com a possibilidade de exclusão e ao clicar em um carro da lista é possível editá-lo. Crie sua proposta contendo essas ações.

O que você deverá entregar: Um arquivo zipado, salvo como ana_caroline_cagliari_cappellari-projeto-fase-1.zip. Esse .zip deverá conter todos os arquivos para o projeto funcionar (exceto a pasta node_modules, esta não deve ser adicionada). Você também deve adicionar um arquivo README.md à raiz do projeto, este deve ter uma breve explicação sobre como executar o projeto e uma descrição do que cada componente realiza. Você também pode utilizar este arquivo para documentar suas decisões no desenvolvimento do projeto.
ATENÇÃO: Seu projeto deve permitir execução, a fim de ser visualizado em um navegador. Você encontra um exemplo de arquivo README.md neste link (este arquivo pode ser editado também no VSCode): https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/blob/main/exemplos/context-react-project/README.md. 

Critérios de Avaliação:
o	Documentação de referência: 0.5 – 
O projeto está acompanhado de documentação (README.md) clara e objetiva (explica todos os passos para rodar a aplicação desde o npm install), bem estruturada e com escrita adequada (seguindo o template fornecido, contendo a identificação do aluno e uma descrição do que cada componente realiza e apresentando prints de como a aplicação ficou).

o	Organização do projeto: 0.5 – 
O projeto:
(a) explora o uso de componentes
(b) contém os componentes obrigatórios (CarList, CarForm e NavBar) 
(c) todos os componentes funcionam conforme esperado.

o	Interatividade com o usuário: 1 – 
O projeto:
(a) possui formulário para inclusão de novos dados com todos os campos requeridos (nome, marca, ano e cor)
(b) não apresenta erro ao submeter os dados.

o	Dinamicidade da página: 1 – 
O projeto:
(a) possui dinamicidade visível (e.g. adiciona os campos aos estados do componente e o estado é atualizado de acordo com as mudanças) 
(b) todas as funcionalidades foram desenvolvidas (Criação e Edição e Remoção).
*/