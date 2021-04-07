console.log ("vinculado user login")

let qs = function(element) {
    return document.querySelector(element)

}

window.addEventListener('load', function() {


    let $inputEmail = qs('#email'),
    $emailErrors = qs('#emailErrors'),

    $Pass = qs('#pass'),
    $passErrors = qs('#passErrores'),

    $form = qs("#form"),

    submitErrors = qs('#submitErrors'),


   
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

 $inputEmail.addEventListener('blur', function(){
    switch (true) {
        case !$inputEmail.value.trim():
            $emailErrore.innerHTML = 'El campo email es obligatorio';
            $inputEmail.classList.add('invalido')
            break;
        case !regExEmail.test($inputEmail.value):
            $emailErrors.innerHTML = 'Debes ingresar un Email válido'
            $inputEmail.classList.add('invalido')
            break;
        default:
            $inputEmail.classList.remove('invalido');
            $inputEmail.classList.add('valido');
            $emailErrors.innerHTML = ''
            break;
    }

})

$Pass.addEventListener('blur', function(){
    switch (true) {
        case !$Pass.value.trim():
            $passErrors.innerHTML = 'El campo contraseña es obligatorio.';
            $Pass.classList.add('invalido')
            break;
        case !regExPass.test($Pass.value):
            $passErrors.innerHTML = 'Debe tener entre 6 y 12 caracteres, al menos una mayúscula, una minúscula y un número.'
            $Pass.classList.add('invalido')
            break;
        default:
            $Pass.classList.remove('invalido');
            $Pass.classList.add('valido');
            $passErrors.innerHTML = ''
            break;
    }

})
$form.addEventListener('submit', function (event) {
    let error = false;
    event.preventDefault()
    console.log($form.elements)
    let elementosForm = this.elements
    for (let index = 0; index < 3; index++) 
    if(!error){
        console.log('Todo bien');
        $form.submit() 
    }

})

})