var formulario = document.querySelector('form')
formulario.addEventListener('submit', function(e){

    //Bloqueia o refresh a pagina
    e.preventDefault()
    // Url de pesquisa
    let urlform = "https://pokeapi.co/api/v2/pokemon/"
    // Valor do input nome
    let nome = document.getElementById("name")
    // concatena a url com o inputname
    urlform = urlform + this.name.value
    //Colocar em minusculo
    urlform = urlform.toLocaleLowerCase()

    let resposta = document.getElementById('content')

    let imagem = document.getElementById('pokemon')
    // responsta em HTML
    let html = ''

    fetch(urlform)
    .then(resposta => resposta.json())
    .then(function(data){
        console.log(data)
        html = 'Nome: ' + data.name + '<br>'
        html = html + 'Type:' + data.types[0].type.name
        resposta.innerHTML= html

        imagem.innerHTML = "<img src='"+ data.sprites.front_default +"'><img src='"+ data.sprites.back_default +"'>" 
    })
    .catch(function(err){
        if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
            html = 'Pokémon não encontrado! 🤔'
        } else{
            html = 'Erro:' + err
        }
        resposta.innerHTML = html
    })
});
