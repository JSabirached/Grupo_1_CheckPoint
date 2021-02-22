const fs = require('fs')
const user_db =JSON.parse(fs.readFileSync('./data/users.json','utf-8'));
const bcrypt = require('bcrypt');

const{validationResult} = require('express-validator')
//2-creamosy exportamos un objeto literal con propiedades que usaremos
module.exports = {
    register :  (req,res)=>{
    //renderiza una vista
        res.render('register')
    },
    processRegister : (req,res)=>{
        let errores = validationResult(req);
        const {username, email, pass} = req.body;
//isEmpty significa que si errores no esta vacio return los errores
        if(!errores.isEmpty()){
            return res.render('register',{
                errores : errores.errors
            })
        }else{//si no hay un error recirre user id y agarre el ultimo id para crear el ultimo id empieza en  entonces si user.id es igual crear nuevo usuario +1 osea que va ir siempre contando
        const {username, email, pass}= req.body;
    
            let lastID = 0;
            user_db.forEach(user => {
                if(user.id > lastID){
                    lastID = user.id
                }
            });
//hasspaas es igual a pass y el numero que deseamos osea que lo encrypta recibe pass como paramtro y el 12 es el nivel encryptacion
            let hashPass = bcrypt.hashSync(pass,12);
//en el 33 +lastID el + significa mas uno
            let newUser = {
                id : +lastID + 1,
                username,
                email,
                pass: hashPass,
                avatar: req.files[0].filename ||'sin imagen'
            };
//pushear el new user con fs.whiteFileSinc el primer parametro es donde se va a guardar el segundo es una estringnificacion un objeto literal y ponemos null,2 para preformar el codigo 
            user_db.push(newUser);
            fs.writeFileSync('./data/users.json',JSON.stringify(user_db,null,2));

            return res.redirect('/users/login')
        }

        
    },
    login : (req,res)=>{
        res.render('login')
    },
    processLogin : (req,res)=>{ 
        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.render('login',{
                errores:errores.errors
            })
        }else{
            const {email,pass,recordar} = req.body;

            let result  = user_db.find(user => user.email === email);

            if(result){
                if(bcrypt.compareSync(pass.trim(),result.pass)){
                 //levantamos session en login
                    req.session.user ={
                       id :result.id,
                       username:result.username,
                       avatar : result.avatar
                   }
             
                    return res.redirect('.')
                }
            }
                if (recordar){
                       res.cookie('usercom4',req.session.user,{
                           maxAge : 1000 * 60
                       })
                  
                    }}  
            
            return res.render('login',{
                errores : [
                    {
                        msg : "credenciales invalidas"
                    }
                ]
            })
        },
   

    profile : (req,res)=>{
        res.render('profile')
    },
    fatality : (req,res)=> {
        req.session.destroy();
        if(req.cookies.usercom4){
            res.cookie('usercom4','',{
                maxAge :-1
            })
        }
         res.redirect()
      }
 }