const player = document.querySelector(".table")
const player2 = document.querySelector(".table2")

players = {
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

function createTable() {

    const first = document.createElement("div")
    const second = document.createElement("div")
    const third = document.createElement("div")

    const loserA = document.createElement("div")
    const loserB = document.createElement("div")
    const loserC = document.createElement("div")

    first.className = second.className = third.className = "player"
    loserA.className = loserB.className = loserC.className = "player"

    let sortedPlayers = [ players.andre, players.junior, players.marcio ]
    let losers = [ players.andre, players.junior, players.marcio ]

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
}


createTable()

