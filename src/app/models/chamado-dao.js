const today = new Date();

let date = today.getDate() + '/' + today.getMonth() + '/' + today.getFullYear();

class ChamadoDao{
    constructor(db){
        this._db = db;
    }

    listar(){
        return new Promise((resolve, reject) => {
            this._db.query('SELECT * FROM chamado',(err, result) => {
                if(err) return reject(err);
                return resolve(result);
            });
        });
    }

    novo(chamado){
        return new Promise((resolve, reject) => {
            this._db.query(`
                INSERT INTO chamado (
                    codigo,
                    titulo, 
                    data_abertura,
                    status,
                    data_encerramento,
                    tipo,
                    descricao,
                    criticidade,
                    modulo
                ) VALUES (?,?,?,?,?,?,?,?,?)`,
                [
                    Math.floor(Math.random() * 10000),
                    chamado.titulo,
                    date,
                    'Novo',
                    chamado.data_encerramento,
                    chamado.tipo,
                    chamado.descricao,
                    chamado.criticidade,
                    chamado.modulo,
                    
                ],
                (err) => {
                    if(err) return reject(err);
                    return resolve();
                }
            );
        });
    }
}

module.exports = ChamadoDao;