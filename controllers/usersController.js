const fs = require('fs')
const user_db =JSON.parse(fs.readFileSync('./data/users.json','utf-8'));
const bcrypt = require('bcrypt');

const{validationResult} = require('express-validator')
//2-creamosy exportamos un objeto literal con propiedades que usaremos
module.exports = {
    registro :  (req,res)=>{
    //renderiza una vista
        res.render('registro')
    },
    processRegistro : (req,res)=>{
        let errores = validationResult(req);
         
//isEmpty significa que si errores no esta vacio return los errores
        if(!errores.isEmpty()){
            return res.render('registro',{
                errores : errores.errors
            })
        }else{//si no hay un error recirre user id y agarre el ultimo id para crear el ultimo id empieza en  entonces si user.id es igual crear nuevo usuario +1 osea que va ir siempre contando
        const { name, email, pass}= req.body;
    
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
                name,
                email,
                pass: hashPass,
                avatar: req.files[0].filename || 'sin imagen',
                category:"Usuario",
                provincia:"",
                localidad:"",
                direccion:"",
                telefono:"",
            };
//pushear el new user con fs.whiteFileSinc el primer parametro es donde se va a guardar el segundo es una estringnificacion un objeto literal y ponemos null,2 para preformar el codigo 
            user_db.push(newUser);
            fs.writeFileSync('./data/users.json',JSON.stringify(user_db,null,2));

            return res.redirect('/users/login')
        }

        
    },
    //login

    login : (req,res)=>{
        res.render('login')
    },
    //procesos del login
    processLogin : (req,res)=>{ 
        
        const errores = validationResult(req);

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
                       name:result.name,
                       avatar : result.avatar,
                       category:result.category
                   }
             
                   
                }
            }//cokiies (recordar)
                if (recordar){
                       res.cookie('usercom4',req.session.user,{
                           maxAge : 1000 * 60 * 60 * 2
                       })
                 return  res.redirect('/')
                    }}   return res.redirect('/')
            
            return res.render('login',{
                errores : [
                    {
                        msg : "credenciales invalidas"
                    }
                ]
            })
        },
   
  //perfil del usuario
    profile : (req,res)=>{
        
        let profileUser = users_db.find(element=> element.id == req.params.id);
        res.render('profile'),{profileUser}
    },


    cerrarSession : (req,res)=> {
        req.session.destroy();
        if(req.cookies.recordar){
            res.cookie('recordar','',{
                maxAge :-1
            })
        }
         res.redirect('/')
      },}
      /* 
//editar
  edit : (req,res)=>{
      res.render('users/edit');
  }
  //formulario de editar cuenta
  editprofile:(req,res)=>{
      const{nombre ,mail}=req.body;
      users_db.forEach(user =>{
          if (user.id ===Numbre (req.params.id)){
              user.name=name.trim(),
              user.email = email.trim()
          },

      });
  }
  viewEdit :(req,res) =>{
      res.render('users/editProfile,{edit})
  }
 viewEditProfile:(req,res)=>{
     const{provincia,localidad,direccion,telefono}=req.body;

       users_db.forEach(user => {
           if(user.id=== Numbre(req.params.id)){
               user.provincia = provincia.trim()
               user.localidad = localidad.trim()
               user.direccion = direccion.trim()
               user.telefono = telefono.trim()
           }
       });
       fs.writeFileSync('./data.users.json',JSON.stringify(users_db,null,2);
 }


     eliminar : (req,res)=>{ 
            user_db.forEach(user=>{
                              if (user.id===Number(req.params.id)){
                                if(fs.existsSync(path.join('public','images',users.avatar))){
                                  if(fs.unlinkSync(path.join('public','images',users.avatar))  ) 
                                                                                            
          
        borrarUser = users_db.indexOf(user)
        users_db.splice(borrarUser,1)
                            }
                                  };

        }
        */