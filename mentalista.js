var numeroSecreto = parseInt(Math.random()*10)

var tentativas = 3

console.log(numeroSecreto)

function Chutar() { var chute = parseInt(document.getElementById("valor").value)}

while (tentativas !== 0) {
    
    function Chutar() { var chute = parseInt(document.getElementById("valor").value)}

 if (chute == numeroSecreto) {alert("Parabéns, você acertou o número secreto!") }
else if (chute > numeroSecreto) {alert("O número secreto é menor")}
else if (chute < numeroSecreto) {alert("O numero secreto é maior")}
else {alert("Você errou o número secreto.")}

tentativas = tentativas -1}

if (chute !== numeroSecreto)  {alert("Suas tentativas acabaram! O número secreto era " + numeroSecreto)}


