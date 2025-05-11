import { GAME_CONFIG } from '../config/config.js';

export default class Marble {
    constructor(isHorizontal = false) {
        this.isHorizontal = isHorizontal;
        this.size = GAME_CONFIG.marble.size;
        this.speed = isHorizontal ? GAME_CONFIG.marble.horizontalSpeed : GAME_CONFIG.marble.verticalSpeed;
        this.x = isHorizontal ? GAME_CONFIG.canvas.width : Math.random() * GAME_CONFIG.canvas.width;
        this.y = isHorizontal ? Math.random() * GAME_CONFIG.canvas.height : GAME_CONFIG.canvas.height;
    }

    updatePosition(scrollSpeed) {
        if (this.isHorizontal) {
            this.x -= (scrollSpeed + this.speed);
        } else {
            this.x -= scrollSpeed;
            this.y -= this.speed;
        }
    }

    checkCollision(player) {
        const collisionX = player.x < this.x + this.size && player.x + player.width > this.x;
        const collisionY = player.y < this.y + this.size && player.y + player.height > this.y;
        return collisionX && collisionY;
    }
}