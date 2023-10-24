// Classificador de Nível de Heroi
console.log("----- CLASSIFICADOR DE NÍVEL DE HERÓI -----");
var nome = "Gabriel";
var xp = 3000;
var nivel = "";
if (xp < 1000) {
    var nivel = "Ferro";
} else if (xp > 1001 && xp < 2000){
    var nivel = "Bronze";
}else if (xp > 2001 && xp < 5000){
    var nivel = "Prata";
}else if (xp > 6001 && xp < 7000){
    var nivel = "Ouro";
}else if (xp > 7001 && xp < 8000){
    var nivel = "Platina";
}else if (xp > 8001 && xp < 9000){
    var nivel = "Ascendente";
}else if (xp > 9001 && xp < 10000){
    var nivel = "Imortal";
}else if (xp >= 10001){
    var nivel = "Radiante";
}
console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);