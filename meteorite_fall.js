const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
const meteoriteFallSpeed = 5;
const meteoriteWidth = 10;
const meteoriteHeight = 40;

let meteorites = new Array();

// let meteoriteXPosition = Math.floor(Math.random() * canvasWidth); 
let meteoriteYPosition = 0;
let player = new Player(canvasWidth / 2, canvasHeight - 10, 10, 10, 10, "blue");
// let meteorite = new Meteorite(meteoriteXPosition, meteoriteYPosition, meteoriteHeight, meteoriteWidth, "black", meteoriteFallSpeed);

function main() {
    fillMeteorites();
    setInterval(meteoriteFall, 50);
}


// main game loop
function meteoriteFall() {
    var randomMeteoriteIndex = Math.floor(Math.random() * meteorites.length);

    context.clearRect(0,0, canvasWidth, canvasHeight);
    // meteorite.drawMeteorite(context);
    // meteorite.makeMeteoriteFall();
    for (arrayIndex = 0; arrayIndex < meteorites.length; arrayIndex++) {
        meteorites[arrayIndex].drawMeteorite(context);
        meteorites[arrayIndex].makeMeteoriteFall();
    }
    player.drawPlayer(context);
}

// function destroyMeteorite() {
//     if (meteorite.y == canvasHeight) {
//         meteorite = null;
//     }
// }


function fillMeteorites() {
    var numberOfMeteorites = parseInt(canvasWidth / meteoriteWidth);

    for (arrayIndex = 0, xPositionValue = 0; arrayIndex < numberOfMeteorites; arrayIndex++, xPositionValue += meteoriteWidth) {
        meteorites[arrayIndex] = new Meteorite(xPositionValue, meteoriteYPosition, meteoriteHeight, meteoriteWidth, "black", meteoriteFallSpeed);
    }
}

// key events
document.addEventListener('keydown', (e) => {
    if (e.key == "ArrowLeft")
        player.moveLeft();
    else if (e.key == "ArrowRight")
        player.moveRight();
});

// starting game
main();
