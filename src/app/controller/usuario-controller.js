//classe para manipulação dos usuarios
class UsuarioController {
    exibeLogin(){
        return (req, res) => {
            res.render('login.ejs');
        }
    }

    efetuaLogin(){
        return (req, res, next) => {
            const passport = req.passport;

            passport.authenticate('local', (err, user, information) => {
                if(information){
                    return res.render('login.ejs');
                }

                if(err){
                    return next(err);
                }

                req.login(user, (err) => {
                    if (err)
                        return next(err);

                    return res.redirect('/chamados')
                });

            })(req, res, next);
        }
    }
}

module.exports = UsuarioController;