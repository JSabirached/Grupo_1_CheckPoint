console.log('Vinculado user register')

let qs = function (element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {


    let $inputNombre = qs('#name'),
        $nombreErrors = qs('#nombreErrors'),

        $inputApellido = qs('#surname'),
        $apellidoErrors = qs('#apellidoErrors'),

        $inputEmail = qs('#email'),
        $emailErrors = qs('#emailErrors'),

        $Pass = qs('#pass'),
        $passErrors = qs('#passErrors'),

        $Pass2 = qs('#pass2'),
        $pass2Errors = qs('#pass2Errors'),

        $img = qs('#img'),
        $imgErrors = qs('#imgErrors'),

        $formReg= qs('#formReg'),

        submitErrors = qs('#submitErrors'),

        regExAlpha = /^[a-zA-Z\sñáéíóúü]*$/,
        regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
        regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

    $inputNombre.addEventListener('blur', function () {
        switch (true) {
            case !$inputNombre.value.trim():
                $nombreErrors.innerHTML = 'El campo nombre es obligatorio';
                $inputNombre.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputNombre.value):
                $nombreErrors.innerHTML = 'Debes ingresar un nombre válido'

                $inputNombre.classList.add('is-invalid')
                break
            default:
                $inputNombre.classList.remove('is-invalid');
                $inputNombre.classList.add('is-valid');
                $nombreErrors.innerHTML = ''
                break;
        }
    })

    $inputApellido.addEventListener('blur', function () {
        switch (true) {
            case !$inputApellido.value.trim():
                $apellidoErrors.innerHTML = 'El campo apellido es obligatorio';
                $inputApellido.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputApellido.value):
                $apellidoErrors.innerHTML = 'Debes ingresar un nombre válido'
                $inputApellido.classList.add('is-invalid')
                break;
            default:
                $inputApellido.classList.remove('is-invalid');
                $inputApellido.classList.add('is-valid');
                $apellidoErrors.innerHTML = ''
                break;
        }
    })

    $inputEmail.addEventListener('blur', function () {
        switch (true) {
            case !$inputEmail.value.trim():
                $emailErrors.innerHTML = 'El campo email es obligatorio';
                $inputEmail.classList.add('is-invalid')
                break;
            case !regExEmail.test($inputEmail.value):
                $emailErrors.innerHTML = 'Debes ingresar un Email válido'
                $inputEmail.classList.add('is-invalid')
                break;
            default:
                $inputEmail.classList.remove('is-invalid');
                $inputEmail.classList.add('is-valid');
                $emailErrors.innerHTML = ''
                break;
        }
    })

    $Pass.addEventListener('blur', function () {
        switch (true) {
            case !$Pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $Pass.classList.add('is-invalid')
                break;
            case !regExPass.test($Pass.value):
                $passErrors.innerHTML = 'Debe tener entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número'
                $Pass.classList.add('is-invalid')
                break;
            default:
                $Pass.classList.remove('is-invalid');
                $Pass.classList.add('is-valid');
                $passErrors.innerHTML = ''
                break;
        }
    })

    $Pass2.addEventListener('blur', function () {
        switch (true) {
            case !$Pass2.value.trim():
                $pass2Errors.innerHTML = 'Debes reingresar la contraseña';
                $Pass2.classList.add('is-invalid')
                break;
            case $Pass2.value != $Pass2.value:
                $pass2Errors.innerHTML = 'Las contraseñas no coinciden'
                $Pass2.classList.add('is-invalid')
                break;
            default:
                $Pass2.classList.remove('is-invalid');
                $Pass2.classList.add('is-valid');
                $pass2Errors.innerHTML = ''
                break;
        }
    });

    $img.addEventListener("change", function fileValidation() {
        let filePath = $img.value,
            allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i
        if (!allowedExtensions.exec(filePath)) {
            $imgErrors.innerHTML = "Carga un archivo de imagen valido, con las extensiones (.jpg - .jpeg - .png - .gif)"
            $img.value = "";
            return false

        }
    })

    $formReg.addEventListener('submit', function (event) {
        let error = false;
        event.preventDefault()
        console.log($formReg.elements)
        let elementosForm= $formReg.elements
        for (let index = 0; index< elementosForm.length -7 ; index++) {
            if (elementosForm[index].value == "") {
                elementosForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = "Los campos señalados son obligatorios.";
                errors = true;
            }
        }
        if(!error){
            console.log('Todo bien');
            $form.submit() 
        }

    })
    //faltan cargar validaciones de envío a domicilio//
})
