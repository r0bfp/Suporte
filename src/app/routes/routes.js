const ChamadoController = require('../controller/chamado-controller');
const UsuarioController = require('../controller/usuario-controller');

const usuarioController = new UsuarioController();
const chamadoController = new ChamadoController();


module.exports = (app) => {
    app.route('/login')
        .get(usuarioController.exibeLogin())
        .post(usuarioController.efetuaLogin());

    app.get('/chamados', chamadoController.lista());

    app.post('/chamados/novo', chamadoController.novo());
}