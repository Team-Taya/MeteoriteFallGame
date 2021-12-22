// CANVAS CONSTANTS
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;
// PLAYER CONSTANTS
const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 10;
const PLAYER_SPEED = 10;
const PLAYER_COLOR = "blue"
const PLAYER_SPAWN_X = CANVAS_WIDTH / 2;
const PLAYER_SPAWN_Y = CANVAS_HEIGHT - PLAYER_WIDTH;
// METEORITE CONSTANTS
const METEORITE_FALL_SPEED = 5;
const METEORITE_WIDTH = 10;
const METEORITE_HEIGHT = 40;
const METEORITE_SPAWN_Y = 0;

let meteorites = new Array();
let player = new Player(PLAYER_SPAWN_X, PLAYER_SPAWN_Y, PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_SPEED, PLAYER_COLOR);

function main() {
    initializeMeteorites();
    setInterval(loopGame, 50);
}

// main game functionality
function loopGame() {
    let randomMeteoriteIndex = Math.floor(Math.random() * meteorites.length);

    context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (meteorites[randomMeteoriteIndex].isFalling == false) {
        meteorites[randomMeteoriteIndex].isFalling = true;
    }

    for (arrayIndex = 0; arrayIndex < meteorites.length; arrayIndex++) {
        if (meteorites[arrayIndex].isFalling == true) {
            meteorites[arrayIndex].draw(context);
            meteorites[arrayIndex].makeFall();
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
    let numberOfMeteorites = parseInt(CANVAS_WIDTH / METEORITE_WIDTH);

    for (arrayIndex = 0, xPositionValue = 0; arrayIndex < numberOfMeteorites; arrayIndex++, xPositionValue += METEORITE_WIDTH) {
        meteorites[arrayIndex] = new Meteorite(xPositionValue, METEORITE_SPAWN_Y, METEORITE_HEIGHT, METEORITE_WIDTH, "black", METEORITE_FALL_SPEED);
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
