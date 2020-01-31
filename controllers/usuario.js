
const {check,validationResult} = require('express-validator');

const UsuarioValidator = require('../validators/Usuario');


usuarios = (app) =>{
    
    app.post('/usuarios', UsuarioValidator.validacoes(),(req,res)=>{

        const erros = validationResult(req);


        if(!erros.isEmpty()){
            res.status(400).send(erros)
            return 
        }

        var usuarioDao = app.model.Usuario;

        let usuario  = req.body;

        usuarioDao.insere(usuario)
            .then(resultado=>{
                res.status(201).send({'Usuario criado com sucesso': resultado})
            }).catch(erro=>{res.send({erro:erro})})

        
    })



    app.get('/usuarios',(req,res)=>{
        var usuariosDao = app.model.Usuario;

        usuariosDao.lista().then(resultado=>{
            res.status(200).send(resultado)
        }).catch(erro =>{
                res.status(404).send({erro:erro})
            }
        )
    })

    app.delete('/usuarios/:id',(req,res)=>{
        var usuariosDao = app.model.Usuario;
        let id = req.params.id;

        usuariosDao.delete(id).then(retorno=>{
            res.status(200).send(retorno)
        }).catch(erro=>{
            res.status(404).send({erro:erro})
        })
    })

    app.put('/usuarios/:id',(req,res)=>{

        var usuariosDao = app.model.Usuario;

        const id = req.params.id;

        let usuario = req.body

        usuario.id_usuario = id

        usuariosDao.update(usuario).then(retorno=>{
            res.status(200).send(retorno)
        }).catch(erro=>{
            res.status(404).send({erro:erro})
        })

        
       
        
    })

    app.get('/usuarios/:email', (req,res)=>{
        
        var usuariosDao = app.model.Usuario;

        const email = req.params.email;

        usuariosDao.buscaPorEmail(email).then(resultado=>{
            res.status(200).send(resultado)
        }).catch(erro=>{
            res.status(500).send(erro);
        })
    })
}

module.exports = usuarios;