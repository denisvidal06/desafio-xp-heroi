let nomeHeroi = "Lord Denis"
let xpHeroi = 7500
let nivelHeroi

if(xpHeroi < 1000){
    nivelHeroi = "Ferro"
}else if(xpHeroi >=1001 && xpHeroi <=2000){
    nivelHeroi = "Bronze"
}else if(xpHeroi >=2001 && xpHeroi <=3000){
    nivelHeroi = "Prata"
}else if(xpHeroi >=3001 && xpHeroi <=4000){
    nivelHeroi = "Ouro"
}else if(xpHeroi >=4001 && xpHeroi <=5000){
    nivelHeroi = "Platina"
}else if(xpHeroi >=5001 && xpHeroi <=6000){
    nivelHeroi = "Ascedente"
}else if(xpHeroi >= 6001 && xpHeroi <=8000){
    nivelHeroi = "Dragão"
}else if(xpHeroi >=8001 && xpHeroi <=1000){
    nivelHeroi = "Deus"
}

console.log("O " + nomeHeroi + " esta no nivel " + nivelHeroi)