const uuid = require('uuid/v4');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/models/usuario-dao');
const db = require('./database');

module.exports = (app) => {
    passport.use(new LocalStrategy(
        {
            usernameField: 'login',
            passwordField: 'senha'
        },
        (login, senha, done) => {
            const usuarioDao = new UsuarioDao(db);

            usuarioDao.buscar(login, senha)
                        .then((result) => {
                            if(!result){
                                return done(null, false, {
                                    mensagem: 'Autentificação Falhou!'
                                });
                            }

                            return done(null, result);
                        })
                        .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            id: usuario.id 
        };

        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    app.use(session({
        secret: '77seg',
        genid: (req) => {
            return uuid();
        },
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, res, next) => {        
        req.passport = passport;
        next();
    }); 
};

