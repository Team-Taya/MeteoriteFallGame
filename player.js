class Player {
    x;
    y;
    height;
    width;

    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    draw(context) {
        context.beginPath();
        context.rect(this.x, this.y, this.width, this.height)
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    }
}
