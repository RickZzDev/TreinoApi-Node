const conexao = require('../infra/conexao');

class Usuarios{


    insere(usuario){
        return new Promise((resolve,reject)=>{
            const sql = "insert into usuarios set ?"
           
            conexao.query(sql,usuario, (erro,retorno)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(retorno)
                }
            })
        })
    }


}

module.exports = new Usuarios();