// Passo 1: Criar variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let nomeHeroi = "Arthur";
let xpHeroi = 7500;

// Passo 2: Utilizar uma estrutura de decisão para determinar o nível do herói com base na XP
let nivelHeroi;

if (xpHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

// Passo 3: Exibir a mensagem informando o nome do herói e seu nível
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
