const player = document.querySelector(".player")
let getPlayerPosition;

players = {
    andre: {
        position: 0,
        pic: "./src/images/andre.webp",
        name: "André",
        trophy: 0
    },
    marcio: {
        position: 0,
        pic: "./src/images/marcio.webp",
        name: "Márcio",
        trophy: 0
    },
    junior: {
        position: 0,
        pic: "./src/images/junior.webp",
        name: "Júnior",
        trophy: 0
    },
}


player.innerHTML = createPlayer(players.junior)

function createPlayer(player) {

    return `
            <h2 id="player-pos">${player.position}</h2>
            <img id="player-pic" src="${player.pic}" alt="player" >
            <h2 id="player-name" >${player.name}</h2>
            <h2 id="player-trophy" >${player.trophy}</h2>
            `
}