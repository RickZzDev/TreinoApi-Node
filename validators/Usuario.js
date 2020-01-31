const {check,body} = require('express-validator');

const usuariosDao = require('../model/Usuario');

class usuarioValidator{

    static validacoes(){
        return[
            check('nome').isLength({min:3, max:25})
                .withMessage('Nome deve ter entre 5 e 25 caracteres'),
            check('senha').isLength({min:3, max:10})
                .withMessage('Senha deve ter entre 3 e 10 caracteres'),
            // body('email').custom(email=>{
            //     return usuariosDao
            // })    
        ]
    }

}


module.exports = usuarioValidator