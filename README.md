# Rota Acadêmica

**Rota Acadêmica** é um aplicativo mobile desenvolvido com **React Native** que visa otimizar a experiência acadêmica de estudantes, oferecendo funcionalidades para gerenciar a vida universitária e facilitar o transporte.

## Sobre o Projeto

Este projeto é um aplicativo mobile focado em auxiliar estudantes universitários em suas rotinas. Ele provê um fluxo de login e cadastro, uma tela inicial com opções de interação, e funcionalidades específicas para caronas (oferecer e encontrar).

### Funcionalidades Principais

* **Autenticação de Usuário**: Telas de Login e Cadastro para gerenciar acesso.
* **Oferecer Carona**: Formulário para motoristas cadastrarem caronas, especificando local de partida, dias da semana, número de vagas, horário e destino.
* **Caronas Disponíveis**: Lista de caronas publicadas por outros usuários, com detalhes como nome do motorista, saída, chegada e horário.
* **Navegação Intuitiva**: Fluxo de telas gerenciado pelo `@react-navigation/stack`.

## Tecnologias Utilizadas

O projeto é construído sobre as seguintes tecnologias:

* **React Native**: Framework para construção de aplicativos móveis multiplataforma (iOS e Android).
* **Expo**: Ferramentas para desenvolvimento, build e deploy de apps React Native.
* **@react-navigation/native**: Para navegação entre as diferentes telas do aplicativo.
* **@react-navigation/stack**: Implementa um navegador de pilha para as telas.
* **react-native-paper**: Biblioteca de componentes UI personalizáveis para React Native.
* **@expo/vector-icons**: Para uso de ícones no aplicativo, como a seta de voltar.
* **react-native-gesture-handler** e **react-native-safe-area-context**: Dependências auxiliares para a navegação e layout.

## Estrutura do Projeto

A estrutura do projeto segue uma organização modular, facilitando a manutenção e escalabilidade:


trabalho_mobile/
├── App.js                     # Componente principal de navegação
├── index.js                   # Ponto de entrada da aplicação Expo
├── app.json                   # Configurações do aplicativo Expo
├── package.json               # Dependências e scripts do projeto
├── .gitignore                 # Arquivos e pastas a serem ignorados pelo Git
├── README.md                  # Este arquivo
├── assets/                    # Imagens e outros recursos estáticos
│   ├── adaptive-icon.png
│   ├── icon.png
│   ├── logo.png
│   ├── oferecer-carona.png.png
│   ├── caronas-disponiveis.png.png
│   ├── snack-icon.png
│   └── splash-icon.png
├── components/
│   └── AssetExample.js        # Exemplo de componente
└── screens/                   # Telas principais da aplicação
├── CadastroScreen.js      # Tela de registro de novo usuário
├── CaronasScreen.js       # Tela para visualizar caronas disponíveis
├── HomeScreen.js          # Tela inicial após o login
├── LoginScreen.js         # Tela de autenticação
└── OferecerCaronaScreen.js # Tela para oferecer uma nova carona



## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) e o [Expo CLI](https://docs.expo.dev/get-started/installation/#expo-cli) instalados em sua máquina.

```bash
npm install -g expo-cli

Instalação

    Clone o repositório:
    git clone [https://github.com/Gabrieldores/Trabalho-Mobile.git](https://github.com/Gabrieldores/Trabalho-Mobile.git)


    Navegue até o diretório do projeto:

    cd Trabalho-Mobile/trabalho_mobile

    Instale as dependências: 
    npm install
# ou se preferir yarn
# yarn install


Execução

Para iniciar o servidor de desenvolvimento do Expo:
npm start
# ou
# yarn start


Após executar o comando npm start, um QR code será exibido no seu terminal. Você pode escanear este QR code com o aplicativo Expo Go (disponível na App Store e Google Play) em seu smartphone para visualizar o aplicativo em tempo real.

Você também pode optar por rodar em um emulador ou simulador:

    Android: Pressione a no terminal (após npm start).
    iOS: Pressione i no terminal (após npm start).
    Web: Pressione w no terminal (após npm start).
