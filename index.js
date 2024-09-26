const nome = "Diosteles";
let xpHeroi = 1000;
const xpMultiplicador = 0.2;

console.log("Oi!");

for (let i = 0; i < 5; i++) {
    xpHeroi += xpHeroi * xpMultiplicador;
    console.log(`XP do Herói: ${xpHeroi.toFixed(2)}`);
}

const nivelHeroi = calculaNivelHeroi(xpHeroi);
console.log(`O Herói de nome ${nome} está no nível: ${nivelHeroi}`);

function calculaNivelHeroi(xpHeroi) {
    if (xpHeroi <= 1000) {
        return "Ferro";
    } else if (xpHeroi <= 2000) {
        return "Bronze";
    } else if (xpHeroi <= 5000) {
        return "Prata";
    } else if (xpHeroi <= 7000) {
        return "Ouro";
    } else if (xpHeroi <= 8000) {
        return "Platina";
    } else if (xpHeroi <= 9000) {
        return "Ascendente";
    } else if (xpHeroi <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}





