class Player {
    x;
    y;
    height;
    width;
    speed;
    color;

    constructor(x, y, height, width, speed, color) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.color = color;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height)
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}
