var numeroSecreto = parseInt(Math.random()*10)

console.log(numeroSecreto)

function Chutar() { var chute = parseInt(document.getElementById("valor").value)

if (chute == numeroSecreto) {alert("Parabéns, você acertou o número secreto!") }

else {alert("Você errou o número secreto.")} 

alert("O número secreto era " + numeroSecreto) }