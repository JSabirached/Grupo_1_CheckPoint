console.log("vinculado user login")

let qs = function(element) {
    return document.querySelector(element)

}

window.addEventListener('load', function() {


    let $inputEmail = qs('#email'),
    $emailErrors = qs('#emailErrors'),

    $Pass = qs('#pass'),
    $passErrors = qs('#passErrors'),
    
    $formLogin = qs("#formLogin"),

    submitErrors = qs('#submitErrors'),



   
    regExEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;

 $inputEmail.addEventListener('blur', function(){
    switch (true) {
        case !$inputEmail.value.trim():
            $emailErrors.innerHTML = 'El email es obligatorio';
            $inputEmail.classList.add('is-invalid')
            break;
        case !regExEmail.test($inputEmail.value):
            $emailErrors.innerHTML = 'Debes ingresar un Email válido'
            $inputEmail.classList.add('is-invalid')
            break;
        default:
            $inputEmail.classList.remove('is-invalid');
            $inputEmail.classList.add('valid');
            $emailErrors.innerHTML = ''
            break;
    }

})

$Pass.addEventListener('blur', function(){
    switch (true) {
        case !$Pass.value.trim():
            $passErrors.innerHTML = 'Lacontraseña es obligatoria';
            $Pass.classList.add('is-invalid')
            break;
        default:
            $Pass.classList.remove('is-invalid');
            $Pass.classList.add('is-valid');
            $passErrors.innerHTML = ''
            break;
    }

})

$formLogin.addEventListener('submit', function (event) {
    let error = false;
    event.preventDefault()
    console.log($formLogin.elements)
    for (let index = 0; index <$formLogin.elements.length - 2; index ++) {
    if($formLogin.elements[index].value == ""){
        $formLogin.elements[index].classList.add('is-invalid');
        submitErrors.innerHTML = "Los campos señadados son obligatorios";
        error =true
    }
}
    if(!error){
        console.log('Todo bien');
        $formLogin.submit() 
    }

})


})