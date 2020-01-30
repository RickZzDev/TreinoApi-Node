//Importando o express
const express = require('express');
//Injetor de dependencias
const consing = require('consign');
//Imprtando o body-parser
const bodyParser = require('body-parser');
//Chamando o express para o app
const app = express();

const customExpress = ()=>{
    //Colocando um middleWare para transformar o retorno em json
    app.use(bodyParser.json());
    //Injetando as dependencias no app
    consing().include('controllers').include('model').into(app);

    return app;
}


module.exports = customExpress();
