series = (app)=>{

    //Este metodo lista todas as series cadastradas
    app.get('/series',(req,res)=>{
        var seriesDao = app.model.Series;
        seriesDao.lista().then(resultado=>{
            res.send(resultado);
        }).catch(erro=>{
            res.status(500).send(erro);
        })
    })
    //Este metodo insere uma serie
    app.post('/series',(req,res)=>{
        var seriesDao = app.model.Series;
        let serie = req.body;
        seriesDao.insere(serie).then(resultado =>{
            res.status(201).send(serie)
        }).catch(erro => {res.status(500).send(erro)})
    })
    //Este metodo deleta uma serie
    app.delete('/series/:id',(req,res)=>{
        var seriesDao = app.model.Series;

        let id = req.params.id;

        seriesDao.deleteSerie(id).then(resultado=>{
            res.status(200).send('Deletado com sucesso')
        }).catch(erro=>{res.status(500).send(erro)})
    })
    //Este metodo busca uma serie pelo id 
    app.get('/series/:id',(req,res)=>{
        var seriesDao = app.model.Series;

        let id = req.params.id;

        seriesDao.buscaPorId(id).then(resultado=>{
            res.status(200).send(resultado)
        }).catch(erro=>{res.status(500).send(erro)})
    })
    //Metodo para atualizar dado no banco
    app.put('/series/:id',(req,res)=>{

        var seriesDao = app.model.Series;

        const id = req.params.id;
        
        const serieJson = req.body;

        serieJson.id = id;

        seriesDao.update(serieJson)
        .then(resultado =>{
                res.status(200).send({'dado alterado com sucesso':resultado})
            }
            
        ).catch(erro=>{
            res.status(401).send({'erro':erro})
        })

       
        
    })


}

module.exports = series;