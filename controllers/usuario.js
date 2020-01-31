usuarios = (app) =>{
    app.post('/usuarios', (req,res)=>{

        var usuarioDao = app.model.Usuario;

        let usuario  = req.body;

        usuarioDao.insere(usuario)
            .then(resultado=>{
                res.status(201).send({'Usuario criado com sucesso': resultado})
            }).catch(erro=>{res.send({erro:erro})})

        
    })
}

module.exports = usuarios;