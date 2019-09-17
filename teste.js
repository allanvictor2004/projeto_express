const Sequelize = require("sequelize");
const sequelize = new Sequelize('teste', 'root', '123456', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso");
}).catch(erro => {
    console.error("Falha ao se conectar:\n" + erro);
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Postagem.sync({force: true});

/**
 Postagem.create({
    titulo: "Lorem Ipsum",
    conteudo: "Lorem ipsum dolor sit amet. Donec nec arcu eget nunc lacinia viverra. "
 });
*/

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

//Usuario.sync({force: true});

Usuario.create({
    nome: "Allan Victor",
    sobrenome: "M. Guimaraes",
    idade: 19,
    email: "allanvictor@email.com"
});