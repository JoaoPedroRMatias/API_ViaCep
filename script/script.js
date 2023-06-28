var base_route = `http://viacep.com.br/ws/12211010/json/`;

function insertCep(){
    let elementCep = document.getElementById('cep');
    let backend_route = `http://viacep.com.br/ws/${elementCep.value}/json/`;

    fetch(backend_route, {
        method: 'GET'
    })
    .then((data) => {
        return data.json();
    })
    .then((json) => {
        let divDados = document.getElementById('divDados');

        if(json.cep == undefined){
            divDados.innerHTML = `<p>CEP NÃO ENCONTRADO.</p>`;
        }
        else{
            divDados.innerHTML = `
            <p>CEP: ${json.cep}</p>
            <p>Logradouro: ${json.logradouro}</p>
            <p>Complemento: ${json.complemento}</p>
            <p>Bairro: ${json.bairro}</p>
            <p>Localidade: ${json.localidade}</p>
            <p>UF: ${json.uf}</p>
            <p>IBGE: ${json.ibge}</p>
            <p>GIA: ${json.gia}</p>
            <p>DDD: ${json.ddd}</p>
            <p>SIAFI: ${json.siafi}</p>`;
        }
    })
}
