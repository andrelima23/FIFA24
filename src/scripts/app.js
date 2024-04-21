const playerTable = document.querySelector(".table")
const playerTable2 = document.querySelector(".table2")
const playerTable3 = document.querySelector(".table3")
const playerTable4 = document.querySelector(".table4")
const playerTable5 = document.querySelector(".table5")
const scorer = document.querySelector(".table4")


const players = {
    andre: {
        pic: "./src/images/andre.webp",
        name: "André",
        trophies: 29,
        lastTrophies: 63,
        losers: 5,
        lastLosers: 18
    },
    marcio: {
        pic: "./src/images/marcio.webp",
        name: "Márcio",
        trophies: 9,
        lastTrophies: 23,
        losers: 20,
        lastLosers: 42
    },
    junior: {
        pic: "./src/images/junior.webp",
        name: "Júnior",
        trophies: 6,
        lastTrophies: 25,
        losers: 20,
        lastLosers: 51
    },
}

const scorers = {
    mbappe: {
        pic: 'https://fifastatic.fifaindex.com/FIFA24/players/231747.png',
        name: "Mbappé",
        goals: 12
    }, 
    vlahovic: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/246430.png",
        name: "Vlahović",
        goals: 6
    },
    salah: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/209331.png",
        name: "Salah",
        goals: 5
    },
    haller: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/205693.png",
        name: "Haller",
        goals: 5
    },
    sancho: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/233049.png",
        name: "Sancho",
        goals: 2
    }
}



function createPlayerChampion(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.trophies}</h2>
            `
}

function createPlayerChampionLastCup(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.lastTrophies}</h2>
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

function createPlayerLastLoser(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophies" id= ${id} >${player.lastLosers}</h2>
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

function createLastChampionsTable() {
    let sortedPlayers = [ players.andre, players.junior, players.marcio ];

    sortedPlayers.sort( (a, b) => {
        if(b.lastTrophies !== a.lastTrophies) {
            return b.lastTrophies - a.lastTrophies
        }
    })

    sortedPlayers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : index == 1 ? "second" : "third"

        div.className = "player"
        div.innerHTML = createPlayerChampionLastCup(player, position, id)
        playerTable2?.append(div)
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
        playerTable3?.append(div)
    })
}

function createLastLoserTable() {
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
    let sortedScorers = [ scorers.haller, scorers.mbappe, scorers.salah, scorers.sancho, scorers.vlahovic ];

    sortedScorers.sort( (a, b) => {
        if(b.goals !== a.goals) {
            return b.goals - a.goals
        }
    })

    sortedScorers.map( (player, index) => {
        let div = document.createElement("div");
        let position = index + 1;
        let id = index == 0 ? "first" : "second" 

        div.className = "player"
        div.innerHTML = createScorers(player, position, id)
        playerTable5?.append(div)
    })
}

function createTable() {

    const first = document.createElement("div")
    const second = document.createElement("div")
    const third = document.createElement("div")

    const loserA = document.createElement("div")
    const loserB = document.createElement("div")
    const loserC = document.createElement("div")

    const scorerA = document.createElement("div")
    const scorerB = document.createElement("div")
    const scorerC = document.createElement("div")
    const scorerD = document.createElement("div")
    const scorerE = document.createElement("div")

    first.className = second.className = third.className = loserA.className = loserB.className =
    loserC.className = scorerA.className = scorerB.className = scorerC.className = scorerD.className =
    scorerE.className = "player"

    let sortedPlayers = [ players.andre, players.junior, players.marcio ]
    let losers = [ players.andre, players.junior, players.marcio ]
    let sortedScorers = [ scorers.mbappe, scorers.haller, scorers.salah, scorers.sancho, scorers.vlahovic ]

    sortedPlayers.sort( (a, b) => {
        if(b.trophies !== a.trophies) {
            return b.trophies - a.trophies
        }
    })

    losers.sort( (a, b) => {
        if(b.losers !== a.losers) {
            return b.losers - a.losers
        }
    })

    sortedScorers.sort( (a, b) => {
        if(b.goals !== a.goals) {
            return b.goals - a.goals
        }
    })

    first.innerHTML = createPlayerChampion(sortedPlayers[0], 1, "first")
    second.innerHTML = createPlayerChampion(sortedPlayers[1], 2, "second")
    third.innerHTML = createPlayerChampion(sortedPlayers[2], 3, "third")

    player?.append(first)
    player?.append(second)
    player?.append(third)

    loserA.innerHTML = createPlayerLoser(losers[0], 1, "first")
    loserB.innerHTML = createPlayerLoser(losers[1], 2, "second")
    loserC.innerHTML = createPlayerLoser(losers[2], 3, "third")

    player2?.append(loserA)
    player2?.append(loserB)
    player2?.append(loserC)

    scorerA.innerHTML = createScorers(sortedScorers[0], 1, "first")
    scorerB.innerHTML = createScorers(sortedScorers[1], 1, "first")
    scorerC.innerHTML = createScorers(sortedScorers[2], 1, "first")
    scorerD.innerHTML = createScorers(sortedScorers[3], 1, "first")
    scorerE.innerHTML = createScorers(sortedScorers[4], 1, "first")

    scorer?.append(scorerA)
    scorer?.append(scorerB)
    scorer?.append(scorerC)
    scorer?.append(scorerD)
    scorer?.append(scorerE)
}


// createTable()

createChampionsTable()
createLastChampionsTable()
createLoserTable()
createLastLoserTable()
createScorerTable()