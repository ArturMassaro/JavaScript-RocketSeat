var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/ArturMassaro');
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        var dados = JSON.parse(xhr.responseText)
        console.log(JSON.parse(xhr.responseText));
        console.log(dados.following_url);

    }
    
}