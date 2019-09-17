/**
 * Criando aplicação backend com 'Express'
 * Importando a função que cria a aplicação
 * para a constante 'express' e instanciando
 * na constante 'app'.
 */
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post");

// Config
    // Template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}));
        app.use(bodyParser.json());
// Rotas 
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.get('/cadastro', (req, res) => {
        res.render('formulario');
    });

    app.post('/adicionar', (req, res) => {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/');
        }).catch(erro => {
            res.send(`<p>O post nao foi criado!<br>Erro: ${erro}</p>`);
        });
    });

// Deve sempre ser o ultimo do arquivo !!!
app.listen(8081, () => {
    console.log("Servidor radando na url http://localhost:8081");
});