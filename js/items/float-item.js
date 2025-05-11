class FloatItem {
    constructor(x, y, width, height, type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
    }

    updatePosition(scrollSpeed) {
        this.x -= scrollSpeed;
    }

    isOutOfScreen() {
        return this.x + this.width <= 0;
    }
}

export default FloatItem;