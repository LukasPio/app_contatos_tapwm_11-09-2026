# Contatos · Lucas

Aplicativo de contatos personalizado por Lucas Pio de Almeida Galvão, com React Native, Expo SDK 57 e Expo Router.

## Funcionalidades

- Cadastro e login de usuários.
- Listagem, criação, edição e exclusão de contatos.
- Seleção e envio de fotos.
- Busca por nome, email ou telefone e saída da conta.

## Executar

Requer Node.js 22.13 ou superior.

```sh
npm ci
npm start
```

Use `npm run android`, `npm run ios` ou `npm run web` para abrir a plataforma desejada.

A API padrão é `https://api-contatos-auth-04-09-25.onrender.com`. Para usar outro backend, copie `.env.example` para `.env` e ajuste `EXPO_PUBLIC_API_URL`. O backend precisa oferecer os endpoints `/usuarios/login`, `/usuarios/registrar`, `/contatos` e `/upload`, com autenticação Bearer.

O vínculo EAS do projeto anterior foi removido. Para gerar builds pela sua conta, execute `eas init` e configure o novo projeto.

As dependências são instaladas com npm; `node_modules` não é versionado. Os avisos da licença MIT do Expo foram preservados em `LICENSE`.
