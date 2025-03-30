# FrontEnd Senior - Teste Prático - Desaparecidos



Bem-vindo ao projeto **Desaparecidos SEPLAG-MT 2025**, desenvolvido como parte do processo seletivo da Secretaria de Planejamento Estratégico de Mato Grosso (SEPLAG). Este é um frontend moderno e funcional construído em **Angular**, que consome uma API de pessoas desaparecidas, oferecendo uma interface intuitiva e eficiente para visualização e interação com os dados. O objetivo foi criar uma solução robusta, escalável e visualmente agradável, utilizando boas práticas de desenvolvimento e arquitetura.

(./screenshots/app-screen.png)

---

## Tecnologias Utilizadas

Aqui estão as principais tecnologias empregadas no projeto, com um breve resumo de cada uma:

- **Angular (Versão 19)**: Framework poderoso para construção de aplicações web single-page (SPA). Foi usado para estruturar o frontend de forma modular e reativa, garantindo uma experiência fluida ao usuário.
- **Angular Material (Versão 19)**: Biblioteca de componentes UI baseada no Material Design. Adiciona elementos visuais pré-construídos e responsivos, como botões, tabelas e formulários, acelerando o desenvolvimento e melhorando a usabilidade.
- **Tailwind CSS (Versão 4)**: Framework de CSS utilitário que permite estilização rápida e personalizada diretamente no HTML, trazendo flexibilidade e consistência ao design da aplicação.
- **Node.js (Versão 22+)**: Ambiente de execução utilizado para rodar o projeto localmente, gerenciar dependências via npm e suportar o desenvolvimento e build da aplicação.

---

## Como Rodar o Projeto 🚀

Existem **três maneiras** de executar este projeto. Escolha a que melhor se adapta ao seu ambiente e siga os passos abaixo:

### 1. Via GitHub + Node Local
Clone o repositório e rode localmente com Node.js. Certifique-se de ter a versão do Node acimda da 20.

1. Clone o repositório:
   ```bash
   git clone https://github.com/tonkunz/desaparecidos-pjc-seletivo-2025.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd desaparecidos-pjc-seletivo-2025
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
5. Abra o navegador em `http://localhost:4200`.

### 2. Via Docker (Build Local)
Baixe o repositório e construa a imagem Docker localmente.

1. Clone o repositório:
   ```bash
   git clone https://github.com/tonkunz/desaparecidos-pjc-seletivo-2025.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd desaparecidos-pjc-seletivo-2025
   ```
3. Construa a imagem Docker:
   ```bash
   docker build -t desaparecidos-seplag-2025 .
   ```
4. Rode o container:
   ```bash
   docker run -p 8080:80 desaparecidos-seplag-2025
   ```
5. Acesse `http://localhost:8080` no navegador.

### 3. Via DockerHub (Imagem Pré-Construída)
Puxe a imagem diretamente do DockerHub e execute.

1. Puxe a imagem do DockerHub:
   ```bash
   docker pull tonkunz/desaparecidos-seplag-2025
   ```
2. Rode o container:
   ```bash
   docker run -p 8080:80 tonkunz/desaparecidos-seplag-2025
   ```
3. Acesse `http://localhost:8080` no navegador.

> **Nota**: Certifique-se de que o Docker está instalado e rodando em sua máquina para as opções 2 e 3.

---

## Arquitetura do Projeto

O projeto foi estruturado com foco em boas práticas de desenvolvimento Angular, garantindo modularidade, reusabilidade e facilidade de manutenção. Aqui estão os principais conceitos arquiteturais utilizados:

- **Facade Pattern**: Implementei o padrão Facade para centralizar a lógica de comunicação com a API de pessoas desaparecidas. Isso simplifica o acesso aos serviços, abstraindo a complexidade e fornecendo uma interface clara para os componentes.
- **BehaviorSubject**: Utilizei o `BehaviorSubject` do RxJS para gerenciar o estado reativo da aplicação. Ele permite que os componentes sejam notificados de mudanças nos dados em tempo real, como atualizações na lista de desaparecidos, mantendo a UI sempre sincronizada.
- **Modularidade**: O projeto foi dividido em módulos Angular, separando funcionalidades específicas (ex.: listagem, detalhes, filtros) para facilitar a escalabilidade e o trabalho em equipe.
- **Serviços**: Criei serviços injetáveis para encapsular a lógica de negócios e as chamadas HTTP à API, promovendo a separação de responsabilidades.

A combinação dessas abordagens resulta em uma aplicação robusta, performática e preparada para evoluções futuras.

---

## Contribuições

Sinta-se à vontade para abrir issues ou enviar pull requests no repositório. Este projeto foi criado com muito esforço e dedicação para o processo seletivo da SEPLAG-MT, e qualquer feedback é bem-vindo!

---

Feito por Everton Henrique Oliveira Kunz para o processo seletivo SEPLAG-MT 2025.
