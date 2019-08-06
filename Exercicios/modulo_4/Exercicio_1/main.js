function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve,Reject){
        if(idade > 18){
            resolve('asdasd');
        }else{
            Reject();
        }
    });
}


checaIdade(20)
.then(function() {
console.log("Maior que 18");
})
.catch(function() {
console.log("Menor que 18");
});
   