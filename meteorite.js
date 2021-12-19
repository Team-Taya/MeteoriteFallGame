class Meteorite {
    x;
    y;
    height;
    width;
    color;
    displacement;

    constructor(x, y, height, width, color, speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.speed = speed;
    }

    drawMeteorite(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height)
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    makeMeteoriteFall() {
        this.y += this.speed;
    }
}
