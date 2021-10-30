<h1 align="center">Criticism App Backend</h1>

<h3 align="center">Descrição do projeto</h3>
<p align="center">Back end de um app voltado a criticas de filmes/series diversos, sendo que qualquer um pode adicionar uma critica!</p>

<h1 align="center">
    <a href="https://nextjs.org/">🔗 Nextjs </a>
</h1>
<p align="center">🚀 lib para construir interfaces do usuário com componentes reutilizáveis</p>

## Features
#### Back-end

- [x] CRUD movies
- [ ] CRUD criticas
- [ ] CRUD usuarios
- [ ] Populate do banco

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Yarn](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/), [Node.js](https://www.cyberithub.com/install-nvm-for-node-js-on-ubuntu-20-04/)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:PedroPaiao/criticism-app-backend.git

# Acesse a pasta do projeto no terminal/cmd
$ cd criticism-app-backend

# Recomendamos a instalçao do yarn para o gerenciamento de pacotes das dependencias
$ yarn install

# Agora vamos fazer o setup do banco, atualize o database.ts com as suas autenticações do postgres
$ yarn sequelize db:create
$ yarn sequelize db:migrate

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333 - acesse <http://localhost:3333/movies> para testar.
```
