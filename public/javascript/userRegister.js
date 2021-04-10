console.log('Vinculado user register')

let qs = function (element) {
    return document.querySelector(element)
}

window.addEventListener('load', function () {


    let $inputName = qs('#name'),
        $nameErrors = qs('#nameErrors'),

        $inputSurname = qs('#surname'),
        $surnameErrors = qs('#surnameErrors'),

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

    $inputName.addEventListener('blur', function () {
        switch (true) {
            case !$inputName.value.trim():
                $nameErrors.innerHTML = 'El NOMBRE es obligatorio';
                $inputName.classList.add('is-invalid')
                break;
            case !regExAlpha.test($inputNombre.value):
                $nameErrors.innerHTML = 'NOMBRE inválido';
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
                $surnameErrors.innerHTML = 'APELLIDO inválido';
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

    $Pass.addEventListener('blur', function(){
        switch (true) {
            case !$Pass.value.trim():
                $passErrors.innerHTML = 'El campo contraseña es obligatorio';
                $Pass.classList.add('is-valid')
                break;
                case !regExPass.test($Pass.value):
                $passErrors.innerHTML = 'Debe tener entre 6 y 12 caracteres'
                $Pass.classList.add('is-invalid')
                break; 
            default:
                $Pass.classList.remove('is-invalid');
                $Pass.classList.add('is-valid');
                $passErrors.innerHTML = ''
                break;
        }
    })

    $Pass2.addEventListener('blur', function(){
        switch (true) {
            case !$Pass2.value.trim():
                $passErrors.innerHTML = 'Debes REINGRESAR la contraseña';
                $Pass2.classList.add('is-invalid')
                break;
            case $Pass2.value != $Pass2.value:
                $pass2Errors.innerHTML = 'Las contraseñas NO COINCIDEN'
                $Pass2.classList.add('is-invalid')
                break;
            default:
                $Pass2.classList.remove('is-invalid');
                $Pass.classList.add('is-valid');
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
    })
    console.log($formReg.elements)

    $formReg.addEventListener('submit', function (event) {
        let error = false;
        event.preventDefault()
           let elementosForm= $formReg.elements

        for (let index = 0; index < elementosForm.length -6 ; index++) {
            if (elementosForm[index].value == "") {
                elementosForm[index].classList.add('is-invalid');
                submitErrors.innerHTML = "Los campos señalados son obligatorios.";
                error = true;
            }
        }
        if(!error){
            console.log('Todo ok');
            $formReg.submit();
        }

    })
    //faltan cargar validaciones de envío a domicilio//
})
