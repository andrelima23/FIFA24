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

function createChampionsTable(year) {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];
    const statsKey = year ? `fifa${year}` : 'fifa2026';
  
    sortedPlayers.sort((a, b) => {
        return b[statsKey].trophies - a[statsKey].trophies;
    });

    const selector = year ? `.table${year}` : '.table';
    const tableSelector = document.querySelector(selector);

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerChampion(player, position, id, year)
        tableSelector?.append(div)
    })
}

function createLosersTable(year) {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];
    const statsKey = year ? `fifa${year}` : 'fifa2026';

    sortedPlayers.sort((a, b) => {
        return b[statsKey].losers - a[statsKey].losers;
    });

    const selector = year ? `.table-losers${year}` : '.table-losers';
    const tableSelector = document.querySelector(selector);

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerLoser(player, position, id, year)
        tableSelector?.append(div)
    })
}

function createScorersTable(year) {
    let keys = Object.keys(scorers)
    let sortedScorers = [];
    const statsKey = year ? `goals${year}` : 'goals';

    for(let key of keys) {
        if(scorers[key][statsKey] !== undefined) {
            sortedScorers.push(scorers[key]);
        }
    }



    sortedScorers.sort( (a, b) => {
            return b[statsKey] - a[statsKey]
    })

        console.log("Sorted Scorers before sort:", sortedScorers);

    const selector = year ? `.table-scorers${year}` : '.table-scorers';
    const tableSelector = document.querySelector(selector);


    sortedScorers.map( (player, index) => {
        if(index > 4) {
            return
        }
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : "second" 

        div.className = "player"
        div.innerHTML = createScorers(player, position, id, year)
        tableSelector?.append(div)
    })
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