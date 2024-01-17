const player = document.querySelector(".table")
const player2 = document.querySelector(".table2")
const scorer = document.querySelector(".table3")

const players = {
    andre: {
        pic: "./src/images/andre.webp",
        name: "André",
        trophy: 11,
        losers: 4
    },
    marcio: {
        pic: "./src/images/marcio.webp",
        name: "Márcio",
        trophy: 7,
        losers: 56
    },
    junior: {
        pic: "./src/images/junior.webp",
        name: "Júnior",
        trophy: 9,
        losers: 4
    },
}

const scorers = {
    mbappe: {
        pic: 'https://fifastatic.fifaindex.com/FIFA24/players/231747.png',
        name: "Mbappé",
        goals: 9
    }, 
    vlahovic: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/246430.png",
        name: "Vlahović",
        goals: 3
    },
    salah: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/209331.png",
        name: "Salah",
        goals: 1
    },
    haller: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/205693.png",
        name: "Haller",
        goals: 2
    },
    sancho: {
        pic: "https://fifastatic.fifaindex.com/FIFA24/players/233049.png",
        name: "Sancho",
        goals: 9
    }
}



function createPlayerChampion(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophy" id= ${id} >${player.trophy}</h2>
            `
}

function createPlayerLoser(player, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${player.pic}" alt="player" >
            <h2 class="player-name" id= ${id} >${player.name}</h2>
            <h2 class="player-trophy" id= ${id} >${player.losers}</h2>
            `
}

function createScorers(scorer, position, id) {

    return `
            <h2 class="player-pos" id= ${id}>${position}</h2>
            <img class="player-pic" id= ${id} src="${scorer.pic}" alt="scorer" >
            <h2 class="player-name" id= ${id} >${scorer.name}</h2>
            <h2 class="player-trophy" id= ${id} >${scorer.goals}</h2>
            `
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
        if(b.trophy !== a.trophy) {
            return b.trophy - a.trophy
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


createTable()

