console.log('Vinculado user register')

const inputName = document.getElementById("Usuario.name")
const inputSurname =document.getElementById("Usuario.surname")
const inputEmail =document.getElementById("Usuario.email")
const inputTelefono =document.getElementById("Usuario.teléfono")
const inputDireccion =document.getElementById("Usuario.direccion")
const inputLocalidad =document.getElementById("Usuario.localidad")
const inputProvincia =document.getElementById("Usuario.provincia")
const formEdit = document.getElementById("Usuario.Actualizar-perfil")
const FormDelete = document.getElementById("EliminarPerfil")

let regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
inputName.addEventListener('blur',function(){
    switch (true) {
        case !inputName.value.trim():
            errorName.innerHTML = "El nombre es obligatorio";
            inputName.classList.add('is-invalid')
            break;
    
        default:
            inputName.classList.remove('is-invalid');
            inputName.classList.add('is-valid');
            errorName.innerHTML = "";
    }
})