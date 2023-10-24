function calculadoraRank(vic, der) {
    var t = vic - der;
        if (t < 10) {
            var rank = "Ferro";
        } else if (t > 11 && t < 20){
            var rank = "Bronze";
        } else if (t > 21 && t < 50){
            var rank = "Prata";
        } else if (t > 21 && t < 50){
            var rank = "Ouro";
        } else if (t > 21 && t < 50){
            var rank = "Diamante";
        } else if (t > 21 && t < 50){
            var rank = "Lendário";
        } else if (t > 21 && t < 50){
            var rank = "Imortal";
        } else{
            console.log("Valores inválidos!");s
        }
    return console.log(`Ò Herói tem de saldo de ${t} está no nível de ${rank}`);
}

calculadoraRank(35,2);