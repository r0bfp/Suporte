const ChamadoDao = require('../models/chamado-dao');
const db = require('../../config/database');

//classe para manipulação dos chamados
class ChamadoController {
    //metodo para listar chamados
    lista(){
        return (req, res) => {
            const chamadoDao = new ChamadoDao(db);
    
            chamadoDao.listar()
                    .then((result) => {
                        // console.log(result[0].codigo);
                        // res.send({chamados: result});
                        res.render('chamados.ejs', { chamados: result });
                    })
                    .catch((err) => {
                        console.log(err);
    
                    });
    
            chamadoDao.listar((err, result) => {
                if (err) console.log(err);
    
            });
        }
    }

    //metodo para criar um novo chamado
    novo(){
        return (req, res) => {
            const chamadoDao = new ChamadoDao(db);

            chamadoDao.novo(req.body)
                    .then(res.redirect('/chamados'))
                    .catch((err) => {
                        console.log(err);                    
                    });
        }
    }
}

module.exports = ChamadoController;