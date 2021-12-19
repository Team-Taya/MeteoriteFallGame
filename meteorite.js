class Meteorite {
    x;
    y;
    height;
    width;
    color;
    speed;
    isFalling;

    static defaultSpeed = 5;

    constructor(x, y, height, width, color, speed) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
        this.speed = speed;
        this.isFalling = false;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height)
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    makeFall() {
        this.y += this.speed;
    }
}
