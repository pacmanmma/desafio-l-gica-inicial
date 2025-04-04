let nomeHeroi = "pacmaan";
let xpHeroi = 512000;

if(xpHeroi >= 1.000 && xpHeroi <= 2000){
    console.log("Nivel Ferro");
} else if(xpHeroi >= 2001 && xpHeroi <= 5000){
    console.log("Nivel Prata");
} else if(xpHeroi >= 6001 && xpHeroi <= 7000){
    console.log("Nivel Ouro");
} else if(xpHeroi >= 7001 && xpHeroi <= 7000){
    console.log("Nivel Platina Diamante");
} else if(xpHeroi >= 8001 && xpHeroi <= 9000){
    console.log("Nivel Ascendente");
} else if(xpHeroi >= 9001 && xpHeroi <= 10000){
    console.log("Nivel Imortal");
}else if(xpHeroi > 10001){
    console.log("Nivel Radiant");
} else {
    console.log("Nivel Iniciante");
}
