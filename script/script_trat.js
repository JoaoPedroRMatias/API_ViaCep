function numberLimit(){
    let elementCep = document.getElementById('cep');
    let numberAlet = document.getElementById('numberAlet');

    if(elementCep.value.length > 8){
        numberAlet.innerHTML = "O CEP deve possuir até 8 numeros, mais que isso não é retornado dados."
    }
    else{
        numberAlet.innerHTML = ""
    }
}
