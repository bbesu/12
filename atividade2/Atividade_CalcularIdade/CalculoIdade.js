document.addEventListener("DOMContentLoaded", function () {
const Resultado = document.createElement('p'); 
      document.getElementById("divisao").appendChild(Resultado);


function AnoNasc(){
    const Idade = parseFloat(document.getElementById("ano").value);
    return Idade;
}

function calculo() {
        let anoAtual = new Date().getFullYear();
        let idade = AnoNasc();
        Resultado.textContent = `Você tem por volta de ${anoAtual - idade} anos.`;
    }
                
    document.getElementById("Calculo").addEventListener("click", calculo);              
        
    })