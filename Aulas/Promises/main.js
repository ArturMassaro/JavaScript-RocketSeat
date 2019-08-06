var minhaPromise = function(){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/ArturMassaro');
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status === 200){
                    var dados = JSON.parse(xhr.responseText);
                    resolve(dados);
        
                }else{
                    reject('erro na requisição');
                }
                
            }
            
        }
    });
}

var resultado = minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);

    });