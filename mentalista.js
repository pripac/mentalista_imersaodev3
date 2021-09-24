var numeroSecreto = parseInt(Math.random()*10)

console.log(numeroSecreto)

var i= 3

function Chutar() { 



while (i > 0 ){        
var chute = parseInt(document.getElementById("valor").value)

if (chute == numeroSecreto) {alert("Parabéns, você acertou o número secreto!") }

else if (chute > numeroSecreto) {alert("O número secreto é menor")}
else if (chute < numeroSecreto) {alert("O numero secreto é maior")}

else {alert("Você errou o número secreto.")} 

i--}

alert("O número secreto era " + numeroSecreto)  }


