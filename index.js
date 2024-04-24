const prompt = require("prompt-sync")({ sigint: true });

const hero = {
    victories: 0,
    defeats: 0,
    winningBalance: 0,
    levelRank: ''
}

function startHero() {
    hero['victories'] = prompt("Victories: ");
    hero['defeats'] = prompt("Defeats: ");
}

function updateHero() {
    hero['winningBalance'] = calculateWinningBalance(hero['victories'], hero['defeats']);
    hero['levelRank'] = calculateLevelRank(hero['winningBalance']);
}

function calculateWinningBalance(victories, defeats) {
    return Math.round(victories - defeats);
}

function calculateLevelRank(winningBalance) {

    let rank = '';

    if (winningBalance <= 10) { // corrigido de < para <=
        rank = 'Ferro';
    }
    else if (winningBalance <= 20) {
        rank = 'Bronze';
    }
    else if (winningBalance <= 50) {
        rank = 'Prata';
    }
    else if (winningBalance <= 80) {
        rank = 'Ouro';
    }
    else if (winningBalance <= 90) {
        rank = 'Diamante';
    }
    else if (winningBalance <= 100) {
        rank = 'Lendário';
    }
    else {
        rank = 'Imortal';
    }

    return rank;
}

function outputMessage(hero) {
    console.log(`O Herói tem de saldo de ${hero['winningBalance']} está no nível de ${hero['levelRank']}`);
}

function main() {
    startHero();
    updateHero();
    outputMessage(hero);
}

main();
