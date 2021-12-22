const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
const meteoriteFallSpeed = 5;
const meteoriteWidth = 10;
const meteoriteHeight = 40;

let meteoriteYPosition = 0;

let meteorites = new Array();
let player = new Player(canvasWidth / 2, canvasHeight - 10, 10, 10, 10, "blue");

let paused = false;

function main() {
    initializeMeteorites();
    setInterval(loopGame, 50);
}

// main game functionality
function loopGame() {
    let randomMeteoriteIndex = Math.floor(Math.random() * meteorites.length);

    context.clearRect(0,0, canvasWidth, canvasHeight);

    if (meteorites[randomMeteoriteIndex].isFalling == false) {
        meteorites[randomMeteoriteIndex].isFalling = true;
    }

    for (arrayIndex = 0; arrayIndex < meteorites.length; arrayIndex++) {
        if (meteorites[arrayIndex].isFalling == true) {
            meteorites[arrayIndex].draw(context);
            if (!paused) {
                meteorites[arrayIndex].makeFall();
            }
            if (meteorites[arrayIndex].y >= canvas.height) {
                meteorites[arrayIndex].y = 0;
                meteorites[arrayIndex].isFalling = false;
            }
        }
    }
    
    player.draw(context);
}

// fill meteorites array with all possible meteorites in the canvas width
function initializeMeteorites() {
    let numberOfMeteorites = parseInt(canvasWidth / meteoriteWidth);

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
    else if (e.key == "p")
        paused = !paused;
});

// starting game
main();
