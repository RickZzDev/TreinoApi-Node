//Na pasta infra ficam arquivos de conexoes, por exemplo

const mysql = require('mysql');
//Devemos passar um json com os dados para fazer a conexao com o banco
const conexao = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user:'root',
    password:'bcd127',
    database:'seriesApi'

});

module.exports = conexao;