// CANVAS CONSTANTS
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const CANVAS_HEIGHT = canvas.height;
const CANVAS_WIDTH = canvas.width;
// PLAYER CONSTANTS
const PLAYER_WIDTH = 10;
const PLAYER_HEIGHT = 10;
const PLAYER_SPEED = 10;
const PLAYER_COLOR = "rgb(89, 179, 0)";
const METEORITE_COLOR = "rgb(0, 0, 0)";
const PLAYER_SPAWN_X = CANVAS_WIDTH / 2;
const PLAYER_SPAWN_Y = CANVAS_HEIGHT - PLAYER_WIDTH;
// METEORITE CONSTANTS
const METEORITE_FALL_SPEED = 5;
const METEORITE_WIDTH = 10;
const METEORITE_HEIGHT = 40;
const METEORITE_SPAWN_Y = 0;

let meteorites = new Array();

let isGameOver = false;
let player = new Player(PLAYER_SPAWN_X, PLAYER_SPAWN_Y, PLAYER_HEIGHT, PLAYER_WIDTH, PLAYER_SPEED, PLAYER_COLOR);
let paused = false;

function main() {
    initializeMeteorites();
    setInterval(loopGame, 50);
}

// main game functionality
function loopGame() {
    if (paused)
        return;

    let randomMeteoriteIndex = Math.floor(Math.random() * meteorites.length);
    isGameOver = false;
    context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (meteorites[randomMeteoriteIndex].isFalling == false) {
        meteorites[randomMeteoriteIndex].isFalling = true;
    }

    for (i = 0; i < meteorites.length; i++) {
        if (checkCollision(meteorites[i], player)) {
            isGameOver = true;
            context.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
            resetMeteorites();
            alert("Game Over!");
            break;
        }
        if (meteorites[i].isFalling == true) {
            meteorites[i].draw(context);
            meteorites[i].makeFall();
            if (meteorites[i].y >= canvas.height) {
                meteorites[i].y = 0;
                meteorites[i].isFalling = false;
            }
        }
    }
   
    player.draw(context);
}

// fill meteorites array with all possible meteorites in the canvas width
function initializeMeteorites() {
    let numberOfMeteorites = parseInt(CANVAS_WIDTH / METEORITE_WIDTH);

    for (arrayIndex = 0, xPositionValue = 0; arrayIndex < numberOfMeteorites; arrayIndex++, xPositionValue += METEORITE_WIDTH) {
        meteorites[arrayIndex] = new Meteorite(xPositionValue, METEORITE_SPAWN_Y, METEORITE_HEIGHT, METEORITE_WIDTH, METEORITE_COLOR, METEORITE_FALL_SPEED);
    }
}

function checkCollision(meteorite, player) {
    if (meteorite.y + meteorite.height == player.y && meteorite.x <= player.x + player.width && meteorite.x + meteorite.width >= player.x) {
        return true;
    }
    return false;
}

function resetMeteorites() {
    for (i = 0; i < meteorites.length; i++) {
        meteorites[i].isFalling = false;
        meteorites[i].y = 0;
    }
}

// key events
document.addEventListener('keydown', (e) => {
    if (e.key == " ") {
        paused = !paused;
        if (paused) {
            context.fillStyle = "red";
            context.font = "bold 36px sans-serif";
            context.textAlign = "center";
            context.fillText("Paused", CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
        }
    }

    if (e.key == "ArrowLeft")
        player.moveLeft(CANVAS_WIDTH);
    else if (e.key == "ArrowRight")
        player.moveRight(CANVAS_WIDTH);
});

// starting game
main();