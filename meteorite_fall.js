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

let player = new Player();

function main() {
    // TODO: In my opinion we shouldn't have functions like drawMeteorite, meteoritefall, See what I did below
    drawMeteorite();
    meteoriteFall();

    drawScreen();
}

function drawMeteorite() {
    context.beginPath();
    context.rect(meteoriteXPosition, meteoriteYPosition, meteorite.width, meteorite.height)
    context.filleStyle = "black";
    context.fill();
    context.closePath();
}

function meteoriteFall() {
    setInterval(() => {
        meteoriteYPosition += meteoriteDisplacement;
        context.clearRect(0,0, canvasWidth, canvasHeight);
        drawMeteorite();
    }, 50);
}

function drawScreen() {
    
}

main();
