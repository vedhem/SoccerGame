class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    move() {
        if (keyDown(UP_ARROW)) {
            this.y = this.y - 5;
        }

        if (keyDown(DOWN_ARROW)) {
            this.y = this.y + 5;
        }

        if (keyDown(LEFT_ARROW)) {
            this.x = this.x - 5;
        }

        if (keyDown(RIGHT_ARROW)) {
            this.x = this.x + 5;
        }
    }

    show() {
        player = createSprite(this.x, this.y, 20, 20);
        player.addAnimation("running", playerOneAnimation);
    }

}