const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {


    index: (req, res) => {
        res.render('admin/index')
    },
    comidaList: (req, res) => {

        db.Comidas.findAll()



            .then(foods => {
                res.render("admin/comidaList", {
                    title: "Lista de Comidas",
                    foods

                })
            })
            .catch(error => console.log(error))
    },
    userList: (req, res) => {

        db.Usuario.findAll()

            .then(users => {
                res.render("admin/userList", {
                    title: "Lista de Usuarios",
                    users
                })
            })
            .catch(error => console.log(error))
    },
    ventasList: (req, res) => {

        db.Compras.findAll()



            .then(buys => {
                res.render("admin/ventas", {
                    title: "ventas actuales",

                    buys
                })
            })
            .catch(error => console.log(error))
    },
    categorias: (req, res) => {

        db.Category.findAll()



            .then(categorias => {
                res.render("admin/categorias", {
                    title: "Categorias",
                    categorias
                })
            })
            .catch(error => console.log(error))
    },




    comidaCreate: (req, res) => {

        db.Category.findAll()
        


            .then(categorias => {
                res.render("admin/comidaCreate", {
                    title: "Categorias",
                    categorias ,
                    

                })
            })


    },

    comidaStore: (req, res) => {
        let errors = validationResult(req)
        //  res.send(errors)
        if (errors.isEmpty()) {

            const { name, price,  category, description } = req.body;

            db.Comidas.create({
                name: name,
                price: Number(price),
                image: req.files[0] ? req.files[0].filename : 'default.png',
                id_category: category,
                description: description
            })
                .then(() => {
                    //  res.send()
                    res.redirect('/admin/comidaList')
                })
                .catch(error => res.send(error))


        } else {
            db.Category.findAll()



                .then(categorias => {
                    res.render("admin/comidaCreate", {
                        title: "Categorias",
                        categorias,
                        old: req.body,
                        errores: errors.mapped()
                    })
                })
        }
    },
    comidaEdit: (req, res) => {

        let comida = db.Comidas.findByPk(req.params.id)
        let categorias = db.Category.findAll()

        Promise.all([comida, categorias])
            .then(([comida, categorias]) => {
                res.render('admin/comidaEdit', {
                    title: "Edicion de Producto",
                    comida,
                    categorias
                })
            })


    },



    comidaUpdate: (req, res) => {
        
        let errors = validationResult(req);
        if (errors.isEmpty()) {

            const { name, price, category, description } = req.body;

            db.Comidas.update({

                name: name,
                price: price,
                id_category: category,
                description: description,
                image: req.files[0] ? req.files[0].filename : undefined,
            },
                {
                    where: {
                        id: req.params.id
                    }
                })
                .then(() => {
                    return res.redirect('/admin/comidaList')
                })
                .catch(error => res.send(error))
        } else {
            let comida = db.Comidas.findByPk(req.params.id)
            let categorias = db.Category.findAll()

            Promise.all([comida, categorias])
                .then(([comida, categorias]) => {
                    res.render('admin/comidaEdit', {
                        title: "Edicion de Producto",
                        comida,
                        categorias,
                        errores: errors.mapped()
                    })
                })
        }

    },

    comidaDelete: (req, res) => {
        //   res.send(comidaDelete)

        db.Comidas.destroy({

            where: {
                id: req.params.id

            }
        })
            .then(() => {
                return res.redirect('/admin/comidaList')
            })
       .catch (error => res.send(error))
    },


}



