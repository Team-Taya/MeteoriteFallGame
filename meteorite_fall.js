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

let player = new Player(canvasWidth / 2, canvasHeight / 2, 10, 10);

function main() {
    setInterval(meteoriteFall, 50);
}

function drawMeteorite() {
    context.beginPath();
    context.rect(meteoriteXPosition, meteoriteYPosition, meteorite.width, meteorite.height)
    context.filleStyle = "black";
    context.fill();
    context.closePath();
}

function meteoriteFall() {
    context.clearRect(0,0, canvasWidth, canvasHeight);
    drawMeteorite();
    player.draw(context);

    meteoriteYPosition += meteoriteDisplacement;
}

main();
