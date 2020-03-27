class UsuarioDao{
    constructor(db){
        this._db = db;
    }

    buscar(usuario){
        return new Promise((resolve, reject) => {
            this._db.query(`SELECT * FROM usuario WHERE login='${usuario.login}' AND senha='${usuario.senha}'`,(err, result) => {
                if(err) return reject(err);
                console.log(result);
                
                return resolve(result);
            });
        });
    }
}

module.exports = UsuarioDao;