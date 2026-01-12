import { players, scorers } from "./players.js"

function createPlayerChampion(player, position, id, year) {
    const statsKey = year ? `fifa${year}` : 'fifa2026';

    return `
            <h2 class="player-pos" id="${id}">${position}</h2>
            <img class="player-pic" id="${id}" src="${player.pic}" alt="player">
            <h2 class="player-name" id="${id}">${player.name}</h2>
            <h2 class="player-trophies" id="${id}">${player[statsKey].trophies}</h2>
            `;
}

function createPlayerLoser(player, position, id, year) {
    const statsKey = year ? `fifa${year}` : 'fifa2026';

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player[statsKey].losers}</h2>
            `
}

function createScorers(scorer, position, id, year) {

    const key = year ? `goals${year}` : 'goals';

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${scorer.pic}" alt="scorer" >
            <h2 class="player-name" id= ${id} >${scorer.name}</h2>
            <h2 class="player-trophies" id= ${id} >${scorer[key]}</h2>
            `
}



function createLosersTable(year) {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];
    const statsKey = year ? `fifa${year}` : 'fifa2026';

    sortedPlayers.sort((a, b) => b[statsKey].losers - a[statsKey].losers);

    const selector = year ? `.table-losers${year}` : '.table-losers';
    const tableSelector = document.querySelector(selector);

    let currentPosition = 0;
    let lastLosers = -1;

    sortedPlayers.map((player, index) => {
        const losersCount = player[statsKey].losers;

        if (losersCount !== lastLosers) {
            currentPosition = index + 1;
        }
        lastLosers = losersCount;

        let div = document.createElement("div");
        div.className = "player";

        // Define ID baseado na posição para manter as cores de destaque
        let id = currentPosition === 3 ? "first" : currentPosition === 2 ? "second" : "third";

        div.innerHTML = createPlayerLoser(player, currentPosition, id, year);
        tableSelector?.append(div);
    });
}


function createChampionsTable(year) {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];
    const statsKey = year ? `fifa${year}` : 'fifa2026';

    sortedPlayers.sort((a, b) => b[statsKey].trophies - a[statsKey].trophies);

    const selector = year ? `.table${year}` : '.table';
    const tableSelector = document.querySelector(selector);

    // Variáveis para controlar o empate
    let currentPosition = 0;
    let lastTrophies = -1;

    sortedPlayers.map((player, index) => {
        const trophies = player[statsKey].trophies;

        // Se o número de troféus for diferente do anterior, atualiza a posição
        // Caso contrário, mantém a mesma (empate)
        if (trophies !== lastTrophies) {
            currentPosition = index + 1;
        }
        
        lastTrophies = trophies; // Atualiza para a próxima comparação

        let div = document.createElement("div");
        
         let id = currentPosition === 1 ? "first" : currentPosition === 2 ? "second" : "third";

        div.className = "player";
        // Passamos 'currentPosition' em vez de 'index + 1'
        div.innerHTML = createPlayerChampion(player, currentPosition, id, year);
        tableSelector?.append(div);
    });
}


function createScorersTable(year) {
    let keys = Object.keys(scorers);
    let sortedScorers = [];
    const statsKey = year ? `goals${year}` : 'goals';

    for(let key of keys) {
        if(scorers[key][statsKey] !== undefined) {
            sortedScorers.push(scorers[key]);
        }
    }

    sortedScorers.sort((a, b) => b[statsKey] - a[statsKey]);

    const selector = year ? `.table-scorers${year}` : '.table-scorers';
    const tableSelector = document.querySelector(selector);

    let currentPosition = 0;
    let lastGoals = -1;

    sortedScorers.map((player, index) => {
        if(index > 4) return; // Mantém o limite de Top 5

        const goalsCount = player[statsKey];

        if (goalsCount !== lastGoals) {
            currentPosition = index + 1;
        }
        lastGoals = goalsCount;

        let div = document.createElement("div");
        div.className = "player";

        // Para artilheiros, geralmente apenas o 1º ganha destaque especial
        let id = currentPosition === 1 ? "first" : "second"; 

        div.innerHTML = createScorers(player, currentPosition, id, year);
        tableSelector?.append(div);
    });
}


createChampionsTable()
createChampionsTable(2025)
createChampionsTable(2024)
createChampionsTable(2023)
createLosersTable()
createLosersTable(2025)
createLosersTable(2024)
createLosersTable(2023)
createScorersTable()
createScorersTable(2025)
createScorersTable(2024)
createScorersTable(2023)