const conexao = require('../infra/conexao');
//Esta classe possui os metodos para enviar e pegar
//dados do banco
class Serie{
    //Método para pegar dados do banco
    lista(){
        return new Promise((resolve,reject)=>{
            const sql = 'select * from series';

            conexao.query(sql, (erro,retorno)=>{
                if(erro){
                    reject(erro);
                }else{
                
                    resolve(retorno)
                }
            })
        })
    }

    insere(serie){
        return new Promise((resolve,reject)=>{
            const sql = "insert into series set ?";

            conexao.query(sql, serie, (erro,retorno)=>{
                if(erro){
                    reject(erro)
                }else{
                    resolve(retorno)
                }
            })
        })
    }

    deleteSerie(id){
        return new Promise((resolve,reject)=>{

            const sql = "DELETE FROM series WHERE id = ?"

            conexao.query(sql,id,(erro,retorno)=>{
                if(erro){
                    reject('erro ao deletar' + erro)
                }else{
                    resolve(retorno)
                }
            })
        })
    }

    buscaPorId(id){
        return new Promise((resolve,reject)=>{
            const sql = "SELECT * FROM series WHERE id = ?";

            conexao.query(sql, id, (erro,retorno)=>{
                if(erro){
                    reject('Erro ao buscar pelo id' + erro)
                }else{
                    resolve(retorno)
                }
            })
        })
    }

    update(serie){
       return new Promise((resolve,reject)=>{
           const sql = "update series set ? where id = ?";

           conexao.query(sql,[serie, serie.id],(erro,retorno)=>{
               if(erro){
                   reject(erro)
               }else{
                   resolve(retorno);
               }
           })
       })
    }

}

module.exports = new Serie();