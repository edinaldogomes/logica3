document.addEventListener("DOMContentLoaded",function(){

    const num1 = document.getElementById("numero1");
    const num2 = document.getElementById("numero2");
    const rsoma = document.getElementById("resultadosoma");
    const btnSomar = document.getElementById("botaosomar");

    btnSomar.addEventListener("click",function(){
        var num1soma = parseInt(num1.value);
        var num2soma = parseInt(num2.value);
        var resSoma = num1soma + num2soma;
        rsoma.value = resSoma;
        console.log(num1soma);
        
    });

});

