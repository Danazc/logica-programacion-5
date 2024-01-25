var numeroSecreto = Math.floor(Math.random() * 100) + 1;

var intentos = [];

function verificarNumero(numero) {
    return !isNaN(numero) && numero >= 1 && numero <= 100;
}

function adivinar() {
    var input = document.getElementById("number").value;
    var numero = parseInt(input);

    if (verificarNumero(numero)) {
        intentos.push(numero);

        if (numero === numeroSecreto) {
            var resultado = "Felicidades, adivinaste el número secreto.";
        } else if (numero < numeroSecreto) {
            var resultado = "El número secreto es mayor. Vuelve a intentarlo.";
        } else {
            var resultado = "El número secreto es menor. Vuelve a intentarlo.";
        }

        resultado += "<br>Números introducidos: " + intentos.join(", ");
        document.getElementById("resultado").innerHTML = resultado;
    } else {
        document.getElementById("resultado").innerHTML = "Error: Por favor introduce un número válido del 1 al 100.";
    }
}
