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
let isGameOver = false;

function main() {
    initializeMeteorites();
    setInterval(loopGame, 50);
}

// main game functionality
function loopGame() {
    let randomMeteoriteIndex = Math.floor(Math.random() * meteorites.length);
    isGameOver = false;
    context.clearRect(0,0, canvasWidth, canvasHeight);

    if (meteorites[randomMeteoriteIndex].isFalling == false) {
        meteorites[randomMeteoriteIndex].isFalling = true;
    }

    for (i = 0; i < meteorites.length; i++) {
        checkGameOver(meteorites[i].x, meteorites[i].y, player.x, player.y, meteorites[i].width, meteorites[i].height, player.width);
        if (isGameOver == true) {
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
    let numberOfMeteorites = parseInt(canvasWidth / meteoriteWidth);

    for (arrayIndex = 0, xPositionValue = 0; arrayIndex < numberOfMeteorites; arrayIndex++, xPositionValue += meteoriteWidth) {
        meteorites[arrayIndex] = new Meteorite(xPositionValue, meteoriteYPosition, meteoriteHeight, meteoriteWidth, "black", meteoriteFallSpeed);
    }
}

function checkGameOver(meteoriteX, meteoriteY, playerX, playerY, meteoriteWidth, meteoriteHeight, playerWidth) {
    if (meteoriteY + meteoriteHeight == playerY) {
        if (meteoriteX <= playerX + playerWidth && meteoriteX + meteoriteWidth >= playerX) {
            isGameOver = true;
            context.clearRect(0,0, canvasWidth, canvasHeight);
            resetMeteorites();
            alert("Game Over!");
        }
    }
}

function resetMeteorites() {
    for (i = 0; i < meteorites.length; i++) {
        meteorites[i].isFalling = false;
        meteorites[i].y = 0;
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
