## Curso Frames Web

Repositório criado para armazenar o projeto de Frames Web do curso adquirido na Udemy

Link do curso: https://www.udemy.com/course/mean-primeira-aplicacao-do-zero/

### Instruções para rodar o projeto - Backend

1. Ter o [Node](https://nodejs.org/en/) instalado
2. Ter o [npm](https://www.npmjs.com/get-npm) instalado
3. Ter o [Mongo](https://www.mongodb.com/) instalado e rodando

   - Para mais instruções: https://www.hostinger.com.br/tutoriais/instalar-mongodb-ubuntu
   - Verifique se as configurações do mongo estão de acordo com o que foi implementado aqui em backend > config > database.js (caso esteja diferente, deixei aqui exemplo de como as informações precisam estar posicionadas para o banco funcionar com o backend)

   > mongoose.connect('mongodb://username:password@host:port/database');

4. Entrar na pasta backend:

```
cd backend
```

7. Rodar as configurações do projeto com o seguinte comando:

```
npm install
```

8. Executar no modo de desenvolvimento

```
npm run dev
```

9. Se você não estiver rodando nada na porta configurada do projeto, então você receberá o seguinte link:

```
Local:   http://localhost:3000/
```

    - O backend está configurado para iniciar na **porta 3000**, caso precise mudar a porta entre em backend > config > server.js e mude a constante _port_

### Tecnologias Utilizadas

- HTML
- CSS
- Mongo
- Express
- Angular
- Node
