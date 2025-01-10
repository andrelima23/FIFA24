import { players, scorers } from "./players.js"

const playerTable = document.querySelector(".table")
const playerTable2024 = document.querySelector(".table2024")
const playerTable2023 = document.querySelector(".table2023")
const loserTable = document.querySelector(".table-losers")
const loserTable2024 = document.querySelector(".table-losers2024")
const loserTable2023 = document.querySelector(".table-losers2023")
const playerTable4 = document.querySelector(".table4")
const scorerTable = document.querySelector(".table-scorers")
const scorerTable2024 = document.querySelector(".table-scorers2024")
const scorer = document.querySelector(".table4")

const checkPlayers = () =>  {
    if (!players || !players.andre || !players.junior || !players.marcio) {
        console.error("Erro: A variável 'players' ou suas propriedades não estão definidas.");
        return;
    }
}

console.log("--- linha inicial ")



function createPlayerChampion(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.trophies}</h2>
            `
}

function createPlayerChampion2024(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.fifa2024.trophies}</h2>
            `
}

function createPlayerChampion2023(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.fifa2023.trophies}</h2>
            `
}

function createPlayerLoser(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.losers}</h2>
            `
}

function createPlayerLoser2024(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.fifa2024.losers}</h2>
            `
}

function createPlayerLoser2023(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.fifa2023.losers}</h2>
            `
}

function createScorers(scorer, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${scorer.pic}" alt="scorer" >
            <h2 class="player-name" id= ${id} >${scorer.name}</h2>
            <h2 class="player-trophies" id= ${id} >${scorer.goals}</h2>
            `
}

function createScorers2024(scorer, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${scorer.pic}" alt="scorer" >
            <h2 class="player-name" id= ${id} >${scorer.name}</h2>
            <h2 class="player-trophies" id= ${id} >${scorer.goals2024}</h2>
            `
}

function createScorers2023(scorer, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${scorer.pic}" alt="scorer" >
            <h2 class="player-name" id= ${id} >${scorer.name}</h2>
            <h2 class="player-trophies" id= ${id} >${scorer.goals2023}</h2>
            `
}


function createChampionsTable() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];

    sortedPlayers.sort( (a, b) => {
        if(b.trophies !== a.trophies) {
            return b.trophies - a.trophies
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerChampion(player, position, id)
        playerTable?.append(div)
    })
}

function createChampionsTable2024() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];
  
    sortedPlayers.sort( (a, b) => {
        if(b.fifa2024.trophies !== a.fifa2024.trophies) {
            return b.fifa2024.trophies - a.fifa2024.trophies
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerChampion2024(player, position, id)
        playerTable2024?.append(div)
    })
}

function createChampionsTable2023() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];
  
    sortedPlayers.sort( (a, b) => {
        if(b.fifa2023.trophies !== a.fifa2023.trophies) {
            return b.fifa2023.trophies - a.fifa2023.trophies
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerChampion2023(player, position, id)
        playerTable2023?.append(div)
    })
}

function createLoserTable() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];

    sortedPlayers.sort( (a, b) => {
        if(b.losers !== a.losers) {
            return b.losers - a.losers
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerLoser(player, position, id)
        loserTable?.append(div)
    })
}

function createLoserTable2024() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];

    sortedPlayers.sort( (a, b) => {
        if(b.fifa2024.losers !== a.fifa2024.losers) {
            return b.fifa2024.losers - a.fifa2024.losers
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerLoser2024(player, position, id)
        loserTable2024?.append(div)
    })
}

function createLoserTable2023() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];

    sortedPlayers.sort( (a, b) => {
        if(b.fifa2023.losers !== a.fifa2023.losers) {
            return b.fifa2023.losers - a.fifa2023.losers
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerLoser2023(player, position, id)
        loserTable2023?.append(div)
    })
}

function createLastLoserTable() {
    checkPlayers()
    
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];

    sortedPlayers.sort( (a, b) => {
        if(b.lastLosers !== a.lastLosers) {
            return b.lastLosers - a.lastLosers
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerLastLoser(player, position, id)
        playerTable4?.append(div)
    })
}

function createScorerTable() {
    let keys = Object.keys(scorers)
    let sortedScorers = [];
    for(let key of keys) {
        if(scorers[key].goals !== undefined) {
            sortedScorers.push(scorers[key])

        }
    }
    sortedScorers.sort( (a, b) => {
        if(b.goals !== a.goals) {
            return b.goals - a.goals
        }
    })

    sortedScorers.map( (player, index) => {
        if(index > 4) {
            return
        }
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : "second" 

        div.className = "player"
        div.innerHTML = createScorers(player, position, id)
        scorerTable?.append(div)

        
    })
}

function createScorerTable2024() {
    let keys = Object.keys(scorers)
    let sortedScorers = [];
    for(let key of keys) {
        if(scorers[key].goals2024 !== undefined) {
            sortedScorers.push(scorers[key])

        }
    }
    sortedScorers.sort( (a, b) => {
        if(b.goals2024 !== a.goals2024) {
            return b.goals2024 - a.goals2024
        }
    })

    sortedScorers.map( (player, index) => {
        if(index > 4) {
            return
        }
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : "second" 

        div.className = "player"
        div.innerHTML = createScorers2024(player, position, id)
        scorerTable2024?.append(div)

        
    })
}


createChampionsTable()
createChampionsTable2024()
createChampionsTable2023()
createLoserTable()
createLoserTable2024()
createLoserTable2023()
// createLastLoserTable()
createScorerTable()
createScorerTable2024()
createScorerTable2023()

console.log("--- linha final ")