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

    lista(){
        return new Promise((resolve,reject)=>{
            const sql = "SELECT * FROM usuarios"

            conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    reject(erro)
                }
                else{
                    resolve(retorno)
                }
            })
        })
    }

    delete(id){
        return new Promise((resolve,reject)=>{
            const sql = "DELETE FROM usuarios WHERE id_usuario = ?"

            let idUsu = id;

            conexao.query(sql, idUsu,(erro,retorno)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(retorno)
                }
            })
        })
    }

    update(usuario){
        return new Promise((resolve,reject)=>{

            const sql = "UPDATE usuarios set ? WHERE id_usuario = ?";

            let usuarioJson = usuario;

            conexao.query(sql,[usuarioJson,usuarioJson.id_usuario], (erro,retorno)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(retorno)
                }
            })


        })
    }

    buscaPorEmail(email){
        return new Promise((resolve,reject)=>{
            const sql  = "SELECT * FROM usuarios WHERE email = ?";

            conexao.query(sql,email,(erro,retorno)=>{
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