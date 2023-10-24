function calculadoraRank(vic, der) {
    var t = vic - der;
        if (t < 10) {
            var rank = "Ferro";
        } else if (t > 11 && t < 20){
            var rank = "Bronze";
        } else if (t > 21 && t < 50){
            var rank = "Prata";
        } else if (t > 51 && t < 80){
            var rank = "Ouro";
        } else if (t > 81 && t < 90){
            var rank = "Diamante";
        } else if (t > 91 && t < 100){
            var rank = "Lendário";
        } else if (t > 101){
            var rank = "Imortal";
        } else{
            console.log("Valores inválidos!");
        }
    return console.log(`O Herói tem de saldo de ${t} vitórias e está no nível de ${rank}`);
}

calculadoraRank(105,23);