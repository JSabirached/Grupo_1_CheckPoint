var comidas = require('../data/comida');
const fs = require('fs');

module.exports = {
    index : (req,res) => {
        res.render('admin/index')
    },
    comidaList : (req,res) => {

        res.render('admin/comidaList',{
            comidas
        })
    },
    comidaCreate : (req,res) => {

        res.render('admin/comidaCreate',{comidas})
    },
    comidaStore : (req,res) => {
        let lastID = 1;
        comidas.forEach(comida => {
            if (comida.id > lastID) {
                lastID = comida.id
            }
        });

        const {name,price,category,description,img} = req.body;

        const comida = {
            id: Number(lastID + 1),
            name,
            price,
            category,
            description,
            img:"",
        }
        
        
    
        comidas.push(comida)

        fs.writeFileSync('./data/comida.json',JSON.stringify(comidas),'utf-8');
        res.redirect('/');

    },
    comidaEdit : (req,res) => {
        
        let comida = comidas.find(comida => comida.id === +req.params.id);

        res.render('admin/comidaEdit',{
            comida
        })
    },
    comidaUpdate : (req,res) => {
        const {name,price,category,description,img} = req.body;

        comidas.forEach(comida => {
            if(comida.id === +req.params.id){
                comida.id = Number(req.params.id);
                comida.name = name;
                comida.price = price;
                comida.category = category;
                comida.description = description;
                comida.img = img
            }
        });

        fs.writeFileSync('./data/comida.json',JSON.stringify(comidas),'utf-8');
        res.redirect('/');
    },
    comidaDelete : (req,res) => {
        comida.forEach(comida => {
            if(comida.id === +req.params.id){
                var aEliminar = comida.indexOf(comida);
                comida.splice(aEliminar,1)
            }
        });
        
        fs.writeFileSync('./data/comida.json',JSON.stringify(comida),'utf-8');
        res.redirect('/admin/comida/list');
    }
}