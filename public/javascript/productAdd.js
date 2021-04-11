console.log('vinculado con JS productAdd')


const formProductAdd = document.getElementById('form-create')
const inputName = document.getElementById('name')
const inputPrice = document.getElementById('price')
const inputDescription = document.getElementById('description')
const selectCategory = document.getElementById('category')
const inputImage = document.getElementById('image')
const imgPrev = document.getElementById('vistaPrevia')

let regExExtensions = /(.jpg|.jpeg|.png|.gif|.jfif|.webp)$/i;



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

inputPrice.addEventListener('blur',function(){
    switch (true) {
        case !inputPrice.value.trim():
            errorPrice.innerHTML = "El precio es obligatorio";
            inputPrice.classList.add('is-invalid')
            break;
    
        default:
            inputPrice.classList.remove('is-invalid');
            inputPrice.classList.add('is-valid');
            errorPrice.innerHTML = "";
    }
})

inputDescription.addEventListener('blur',function(){
    switch (true) {
        case !inputDescription.value.trim():
            errorDescription.innerHTML = "La descripción es obligatoria";
            inputDescription.classList.add('is-invalid')
            break;
    
        default:
            inputDescription.classList.remove('is-invalid');
            inputDescription.classList.add('is-valid');
            errorDescription.innerHTML = "";
    }
})

selectCategory.addEventListener('blur',function(){
    switch (true) {
        case !selectCategory.value.trim():
            errorCategory.innerHTML = "La categoría es obligatoria";
            selectCategory.classList.add('is-invalid')
            break;
    
        default:
            selectCategory.classList.remove('is-invalid');
            selectCategory.classList.add('is-valid');
            errorCategory.innerHTML = "";
    }
})

formProductAdd.addEventListener('submit',function(event){
    let error = false
    event.preventDefault()

    let elementosForm = formProductAdd.elements;
    
    for (let index = 0; index < elementosForm.length-2; index++) {
        if(elementosForm[index].value == ""){
            elementosForm[index].classList.add('is-invalid');
            msgError.innerHTML = "Los campos señadados son obligatorios";
            error =true
        }
    }

    if(!error){
        console.log("Todo Perfecto!!");
        formProductAdd.submit()
    }
    
})

inputImage.addEventListener('change',function(e){

    switch (true) {
        case !regExExtensions.exec(inputImage.value) :
            errores.foto = "Solo imagenes con extension jpg, jpeg, png, o gif"
            errorImage.innerHTML = errores.foto;
            inputImage.classList.add('is-invalid')
            inputImage.value = '';
            vistaPrevia.src = "";
        break
        default:
            inputImage.classList.remove('is-invalid');
            inputImage.classList.add('is-valid');
            errorImage.innerHTML = "";
            // Creamos el objeto de la clase FileReader
            let reader = new FileReader();
            // Leemos el archivo subido y se lo pasamos a nuestro fileReader
            reader.readAsDataURL(e.target.files[0]);
            // Le decimos que cuando este listo ejecute el código interno
            reader.onload = function(){
            vistaPrevia.src = reader.result;
            };
            inputImage.classList.remove('is-invalid');
            inputImage.classList.add('is-valid');
            errorImage.innerHTML = "";
    }

})