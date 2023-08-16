document.addEventListener("DOMContentLoaded",function(){

    const num1 = document.getElementById("numero1");
    const num2 = document.getElementById("numero2");
    const rsoma = document.getElementById("resultadosoma");
    const btnSomar = document.getElementById("botaosomar");
    const fundoDiv = document.querySelector(".divprincipal");
    const btnNovo = document.getElementById("novoValor");

    btnSomar.addEventListener("click",function(){
        var num1soma = parseInt(num1.value);
        var num2soma = parseInt(num2.value);
        const resSoma = num1soma + num2soma;
        rsoma.value = resSoma;
        num1.value="";
        num2.value="";

        console.log(fundoDiv);

        if(resSoma >=7){
            fundoDiv.style.backgroundColor = "green";
        }
        else{
            fundoDiv.style.backgroundColor = "#FA09B7";
            rsoma.style.color = "#982FED"
            rsoma.style.textAlign = "right";
        }
        
        
    });

    btnNovo.addEventListener("click", function(){
        const divF = document.createElement("div");
        divF.className="divFlutuante";
        divF.innerHTML="
            <input type="number" id="novonumero" placeholder="Informe um numero">
            <button id="novoBotao">Somar ao resultado</button>
        ";
        
        document.body.appendChild(divF);

        var numeroNovo = document.getElementById("novonumero");
        var btnnovaSoma = document.getElementById("novoBotao");

        btnnovaSoma.addEventListener("click", function(){
            const novoNum = parseInt(document.getElementById("novonumero").value);
            rsoma.value = rsoma.value + novoNum;
            document.body.removeChild(divF);
        });
        
    })

});

