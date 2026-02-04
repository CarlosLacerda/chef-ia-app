# 👨‍🍳 Chef IA - Gerador de Receitas com Inteligência Artificial

Um aplicativo mobile desenvolvido com React Native e Expo que utiliza IA para criar receitas personalizadas baseadas nos ingredientes que você tem disponível.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📱 Sobre o Projeto

O Chef IA é um aplicativo que transforma a forma como você cozinha! Basta digitar os ingredientes que você tem em casa e a inteligência artificial criará uma receita deliciosa e personalizada para você.

### ✨ Funcionalidades

- 🤖 **Geração de receitas com IA** - Utilizando o modelo Llama 3.1 através da API Groq
- 📝 **Interface intuitiva** - Design moderno e fácil de usar
- ⚡ **Respostas rápidas** - Receitas geradas em segundos
- 🍽️ **Receitas detalhadas** - Inclui ingredientes, modo de preparo, tempo e porções
- 💡 **Dicas especiais** - Cada receita vem com uma dica do chef

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento e build
- **Axios** - Cliente HTTP para requisições à API
- **Groq API** - Acesso ao modelo de IA Llama 3.1
- **React Hooks** - useState para gerenciamento de estado

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## 🔧 Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/chef-ia.git
cd chef-ia
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure a API Key**

Você precisa de uma chave de API do Groq. Siga os passos:

- Acesse [Groq Cloud](https://console.groq.com/)
- Crie uma conta gratuita
- Gere uma API Key
- Abra o arquivo `App.js`
- Substitua a linha 8:

```javascript
const GROQ_API_KEY = "COLOQUE_SUA_CHAVE_AQUI"
```

4. **Execute o projeto**
```bash
npx expo start
# ou
npm start
```

## 📱 Como Usar

### No Desenvolvimento

1. Execute `npm start` ou `npx expo start`
2. Escaneie o QR Code com o app **Expo Go** no seu celular
3. O app abrirá automaticamente

### Gerando o APK

Para criar um APK instalável:

```bash
# Instale o EAS CLI
npm install -g eas-cli

# Faça login no Expo
eas login

# Configure o projeto
eas build:configure

# Gere o APK
npx eas-cli build -p android --profile preview
```

Após o build, você receberá um link para baixar o APK.

## 🎨 Screenshots

> _Adicione aqui screenshots do seu aplicativo_

## 🗂️ Estrutura do Projeto

```
chef-ia/
├── App.js              # Componente principal
├── app.json            # Configurações do Expo
├── package.json        # Dependências do projeto
├── eas.json           # Configurações do EAS Build
└── README.md          # Documentação
```

## 🔐 Segurança

⚠️ **IMPORTANTE**: Nunca compartilhe sua API Key publicamente!

Para produção, considere usar variáveis de ambiente:

1. Instale o expo-constants:
```bash
npx expo install expo-constants
```

2. Crie um arquivo `.env`:
```env
GROQ_API_KEY=sua_chave_aqui
```

3. Adicione `.env` ao `.gitignore`

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas!

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Seu Nome**

- GitHub: [@CarlosLacerda](https://github.com/CarlosLacerda)
- LinkedIn: [Carlos Lacerda](https://www.linkedin.com/in/carlos-lacerda-972652394/)

## 🙏 Agradecimentos

- [Groq](https://groq.com/) - Pela API de IA gratuita
- [Expo](https://expo.dev/) - Pela plataforma incrível
- [Meta](https://llama.meta.com/) - Pelo modelo Llama 3.1

---

⭐ Se este projeto te ajudou, considere dar uma estrela!

**Feito com ❤️ e muita ☕**
