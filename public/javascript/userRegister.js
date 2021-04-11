console.log('Vinculado user register')

let qs = function (elements) {
    return document.querySelector(elements)
}

window.addEventListener('load', function () {


    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),

        $inputSurname = qs('#surname'),
        $surnameErrors = qs('#surnameErrors'),

        $inputEmail = qs('#email'),
        $emailErrors = qs('#emailErrors'),

        $pass = qs('#pass'),
        $passErrors = qs('#passErrors'),

        $pass2 = qs('#pass2'),
        $pass2Errors = qs('#pass2Errors'),

        $img = qs('#img'),
        $imgErrors = qs('#imgErrors'),

        $formReg= qs('#formReg'),

        submitErrors = qs('#submitErrors'),

        regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;


        $inputName.addEventListener('blur', function(){
            console.log($inputName.value.trim())
            switch (true) {
                case !$inputName.value.trim():
                    $nameErrors.innerHTML = 'El NOMBRE es obligatorio'
                    $inputName.classList.add('is-invalid')
                    break;
                case !regExAlpha.test($inputName.value):
                    $nameErrors.innerHTML = 'Ingresar un NOMBRE válido'
                    $inputName.classList.add('is-invalid')  
                    break; 
                default:
                    $inputName.classList.remove('is-invalid');
                    $inputName.classList.add('is-valid');
                    $nameErrors.innerHTML = ''
                    break;
            }
        })

    $inputSurname.addEventListener('blur', function () {
        switch (true) {
            case !$inputSurname.value.trim():
                $surnameErrors.innerHTML = 'El APELLIDO es obligatorio';
                $inputSurname.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputSurname.value):
                $surnameErrors.innerHTML = 'ingresar un APELLIDO válido';
                $inputSurname.classList.add('is-invalid')
                break;
            default:
                $inputSurname.classList.remove('is-invalid');
                $inputSurname.classList.add('is-valid');
                $surnameErrors.innerHTML = ''
                break;
        }
    })

    $inputEmail.addEventListener('blur', function () {
        switch (true) {
            case !$inputEmail.value.trim():
                $emailErrors.innerHTML = 'El EMAIL es obligatorio';
                $inputEmail.classList.add('is-invalid')
                break;
            case !regExEmail.test($inputEmail.value):
                $emailErrors.innerHTML = 'Email inválido';
                $inputEmail.classList.add('is-invalid')
                break;
            default:
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $emailErrors.innerHTML = ''
                break;
        }
    })

    $pass.addEventListener('blur', function() {
        switch (true) {
            case !$pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $pass.classList.add('is-invalid')
                break;
            case !regExPass.test($pass.value):
                $passErrors.innerHTML= 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                $pass.classList.add('is-invalid')
                break;
            default:
                $pass.classList.remove('is-invalid');
                $pass.classList.add('is-valid');
                $passErrors.innerHTML = ''
                break;
        }
    })

    $pass2.addEventListener('blur', function(){
        switch (true) {
            case !$pass2.value.trim():
                $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
                $pass2.classList.add('is-invalid')
                break;
                case $pass2.value != $pass.value:
                pass2Errors.innerHTML = 'Las contraseñas no coinciden';
                $pass2.classList.add('is-invalid')
                break;
            default:
                $pass2.classList.remove('is-invalid');
                $pass2.classList.add('is-valid');
                $pass2Errors.innerHTML = ''
                break;
        }
    });

   
    $img.addEventListener("change", function fileValidation() {
        let filePath = $img.value,
            allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i
        if (!allowedExtensions.exec(filePath)) {
            $imgErrors.innerHTML = "Carga un archivo de imagen valido, con las extensiones (.jpg - .jpeg - .png - .gif)";
            $img.value = "";
            return false

        }
    });

    console.log($formReg.elements)

    $formReg.addEventListener('submit', function (event) {
        let error = false;
        event.preventDefault()
           let elementosForm= $formReg.elements

        for (let index = 0; index < elementosForm.length-6 ; index++) {
            if (elementosForm[index].value == "") {
                elementosForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = "Los campos señalados son obligatorios.";
                error = true;
            }
        }
        if(!error){
            console.log('Todo ok')
            $formReg.submit()
        }

    })


   
})
