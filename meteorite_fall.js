const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;
const meteoriteDisplacement = 5;

let meteoriteXPosition = Math.floor(Math.random() * canvasWidth); 
let meteoriteYPosition = 0;

let meteorite = {
    width: 10,
    height: 40
};

let player = new Player(canvasWidth / 2, canvasHeight - 10, 10, 10, 10, "blue");

function main() {
    setInterval(meteoriteFall, 50);
}

function drawMeteorite() {
    context.beginPath();
    context.rect(meteoriteXPosition, meteoriteYPosition, meteorite.width, meteorite.height)
    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

// main game loop
function meteoriteFall() {
    context.clearRect(0,0, canvasWidth, canvasHeight);
    drawMeteorite();
    player.draw(context);

    meteoriteYPosition += meteoriteDisplacement;
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
