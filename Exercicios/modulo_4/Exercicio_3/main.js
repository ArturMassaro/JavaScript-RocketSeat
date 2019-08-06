var listElement = document.querySelector('div ul');
var buttonElement = document.querySelector('div button');
var inputElement = document.querySelector('div input');


function buscaGit(){
    renderElement(['carregando...']);

    var url = 'https://api.github.com/users/' + inputElement.value + '/repos';

    axios.get(url)
        .then(function(response) {
            renderList(response.data)
            console.log(response.data);
        }).catch(function(error) {
            renderElement(['Usuario nao encontrado']);

            console.log(error);
        })
    console.log(url);

}

function renderList(list){
    listElement.innerHTML = '';

    for(repo of list){
        var item = document.createElement('li');
        var itemLink = document.createElement('a');
        var textElement = document.createTextNode(repo.name);

        itemLink.setAttribute('href', repo.html_url);
        itemLink.appendChild(textElement);


        item.appendChild(itemLink);
        listElement.appendChild(item);
    }

}

function renderElement(title){
    listElement.innerHTML = '';

    
    var item = document.createElement('li');
    var textElement = document.createTextNode(title);

    item.appendChild(textElement);
    listElement.appendChild(item);
    

}



console.log(inputElement);


buttonElement.setAttribute('onclick', 'buscaGit()');
