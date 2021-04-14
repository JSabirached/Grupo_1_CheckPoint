const fs = require("fs");
const path = require("path");
const db = require("../database/models");
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')



module.exports = {

    registro: (req, res) => {
        res.render("registro", {
            title: "registro de usuario"
        });
    },
    processRegistro: (req, res) => {

        let errores = validationResult(req);

        if (!errores.isEmpty()) {

            return res.render('registro', {
                errores: errores.mapped(),
                title: 'Registro de Usuario'
            })
        } else {


            const { name, surname, email, pass, provincia, localidad, direccion, telefono ,avatar} = req.body;

            db.Usuario.create({
                name: name.trim(),
                surname: surname.trim(),
                email: email.trim(),
                pass: bcrypt.hashSync(pass, 12),
                avatar: req.files[0] ? req.files[0].filename :'default.png',
                category: '0',
                provincia: provincia.trim(),
                localidad: localidad.trim(),
                direccion: direccion.trim(),
                telefono: telefono.trim(),
            })
                .then(() => { res.redirect("/users/login") })
        }

    },
    login: (req, res) => {
        res.render("login", {
            title: "ingreso"
        });
    },
    processLogin: (req, res) => {

        let errores = validationResult(req)

        if (!errores.isEmpty()) {

            return res.render("login", {
                errores: errores.mapped(),
                title: "ingreso",
            })

        } else {
            const { email, pass, recordar} = req.body;

            db.Usuario.findOne({
                where: {
                    email: email
                }
            })
                .then(user => {
                    if (user && bcrypt.compareSync(pass, user.pass)) {

                        req.session.user = {
                            id: user.id,
                            name: user.name,
                            surname: user.surname,
                            email: user.email,
                            avatar: user.avatar,
                            category: user.category
                        }
                        console.log(req.session.user)
                        // creo la cookie para cuando el usuario elija recordarme

                        if (recordar) {
                            res.cookie("userCheckPoint", req.session.user, { maxAge: 1000 * 60 * 60 * 2 });
                        }
                        return res.redirect("/");
                    } else {
                        return res.render('login', {
                            errores: {
                                email: {
                                    msg: 'Email o contraseña incorrecto'
                                }
                            },

                            title: 'ingreso'
                        })
                    }


                })


                .catch(error => console.log(error))
        }


    },

    profile: (req, res) => {

        db.Usuario.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((Usuario) => {
                res.render("profile", {
                    title: "Perfil",
                    Usuario
                })
            })
    },
    profileEdit: (req, res) => {

        db.Usuario.findOne({
            where: {
                id: req.params.id
            }
        })
            .then((Usuario) => {
                res.render("profileEdit", {
                    title: "Editar Perfil",
                    Usuario
                })
            })
    },

    update: (req, res) => {

        const { name, surname, email, telefono, direccion, localidad, provincia } = req.body

        db.Usuario.update({
            name: name.trim(),
            surname: surname.trim(),
            email: email.trim(),
            telefono : telefono.trim(),
            direccion : direccion.trim(),
            localidad : localidad.trim(),
            provincia : provincia.trim(),
            avatar: req.files[0] ? req.files[0].filename : undefined
        }, {
            where: {
                id: req.session.user.id
            }
        })
            .then(() => {
                res.redirect("/users/profile/" + req.session.user.id)
            })
    },
    remove: (req, res) => {

        db.Usuario.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(() => {
                //cuando cierro sesion, mato el req.session
                req.session.destroy();

                //cuando finalizo la session, tambien me encargo de matar la cookie
                if (req.cookies.user) {
                    res.cookie("user", "", { maxAge: -1 })
                };

                res.redirect("/");
            })


    },
    logout: (req, res) => {

        //cuando cierro sesion, finalizo el req.session
        req.session.destroy();

        //cuando finalizo la session, tambien me encargo de matar la cookie
        if (req.cookies.user) {
            res.cookie("user", "", { maxAge: -1 })
        };

        //finalizo redireccionando
        res.redirect("/");
    },
    adminChange :(req , res) => {
        if(req.params.admin == true){
            db.Usuario.update({
                category : 1
            },
            {
                where :{
                    id :req.params.id
                }
            })
            .then( () =>{
                res.json({admin : true})
            })
        }else{
            db.Usuario.update({
                category : 0
            },
            {
                where :{
                    id :req.params.id
                }
            })
            .then( () =>{
                res.json({user : false})
            })
        }
    }
}