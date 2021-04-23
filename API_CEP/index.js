const cep = document.querySelector("#cep");

cep.addEventListener("click", () => {

    cep.addEventListener("blur", (e) => {
        let search = cep.value.replace("-", ""); //Procura por algo e subsitui por outro

        const options = { // um objeto para definir as opções já que é do pc ou sistema para outro
                method: 'GET', // tipo do método {get,post,del, etc}
                mode: 'cors', //cross doamin, origem diferente
                cache: 'default'
            }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options) // acessando/buscando uma api com o fetch já com as options setadas
            //retorna uma promessa, usar then para se der certo e catch para um possivel erro.
            .then(Response => {
                Response.json() // se der certo, ai ele verifica se o json veio em formato json
                    .then(data => showData(data))
            }) // no primeiro response poder usar parenteses se tiver mais de 1 parametro
            .catch(e => alert(`Ops, esse é um CEP inválido`)) // caso de erro, captura o erro e mostra no log 
        console.log(cep.value);
    });

});
//pega o valor que foi digitado 

const showData = (result) => { // function que captura 
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo];
        }
    }
}