function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        var saldoVitorias = eval(resultado);
        var nivel = "";

        if (saldoVitorias <= 10) {
            nivel = "Ferro";
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            nivel = "Bronze";
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivel = "Prata";
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivel = "Ouro";
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivel = "Diamante";
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            nivel = "Lendário";
        } else if (saldoVitorias >= 101) {
            nivel = "Imortal";
        }

        document.getElementById('resultado').innerHTML = eval (resultado);
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }

    // Chame a função rankeHerois aqui, após atualizar a mensagem
    rankeHerois();
}

function rankeHerois() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        var saldoVitorias = eval(resultado);
        var nivel = "";

        if (saldoVitorias <= 10) {
            nivel = "Ferro";
        } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
            nivel = "Bronze";
        } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
            nivel = "Prata";
        } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
            nivel = "Ouro";
        } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
            nivel = "Diamante";
        } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
            nivel = "Lendário";
        } else if (saldoVitorias >= 101) {
            nivel = "Imortal";
        }

        document.getElementById('mensagem').innerHTML = "O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel;
    }
}
