import { GAME_CONFIG } from '../config/config.js';
import  MUSIC  from '../runtime/music';

export default class Player {
    constructor() {
        // Player's initial horizontal position
        this.x = 100;
        // Player's initial vertical position
        this.y = 0;
        // Player's width from game configuration
        this.width = GAME_CONFIG.player.width;
        // Player's height from game configuration
        this.height = GAME_CONFIG.player.height;
        // Indicates if the player is currently jumping
        this.jumping = false;
        // Count of consecutive jumps made by the player
        this.jumpCount = 0;
        // Player's vertical velocity
        this.velocityY = 0;
        // Gravity affecting the player's vertical movement
        this.gravity = GAME_CONFIG.player.gravity;
        // Initial velocity when the player jumps
        this.jumpVelocity = GAME_CONFIG.player.jumpVelocity;
        // Maximum number of consecutive jumps allowed
        this.maxJumpCount = GAME_CONFIG.player.maxJumpCount;
        // Indicates if the player is in floating state
        this.isFloating = false;
        // Timestamp when floating started
        this.floatStartTime = 0;
        // Duration for which the player can float
        this.floatDuration = GAME_CONFIG.float.duration;
        // Time before float ends to start warning
        this.floatWarningTime = GAME_CONFIG.float.warningTime;
        // Indicates if the player is flashing
        this.isFlashing = false;
        // Interval between flashes
        this.flashInterval = GAME_CONFIG.float.flashInterval;
        // Timestamp of the last flash
        this.lastFlashTime = 0;
        // Player's background image
        this.backgroundImage = wx.createImage();
        this.backgroundImage.src = 'images/player.png';
    }
        startFloating() {
            this.isFloating = true;
            this.floatStartTime = Date.now();
            this.isFlashing = false;
        }

        updateFloatingStatus() {
            if (this.isFloating) {
                const currentTime = Date.now();
                const elapsedTime = currentTime - this.floatStartTime;

                if (elapsedTime >= this.floatDuration) {
                    this.isFloating = false;
                    this.isFlashing = false;
                    this.velocityY = 0;
                    this.jumping = false;
                    this.jumpCount = 0;
                } else {
                    this.velocityY = 0;

                    if (elapsedTime >= this.floatDuration - this.floatWarningTime) {
                        if (currentTime - this.lastFlashTime >= this.flashInterval) {
                            this.isFlashing = !this.isFlashing;
                            this.lastFlashTime = currentTime;
                        }
                    }
                }
            }
        }

        startFlashing() {
            this.isFlashing = true;
            this.lastFlashTime = Date.now();
        }

        updateFlashingStatus() {
            const currentTime = Date.now();
            if (currentTime - this.lastFlashTime >= this.flashInterval) {
                this.isFlashing = !this.isFlashing;
                this.lastFlashTime = currentTime;
            }
        }

    jump() {
        // 如果正在浮空，不允许跳跃
      if (this.isFloating) return;
      
      if (this.jumpCount < this.maxJumpCount) {
          this.jumping = true;
          this.jumpCount++;
          // 根据跳跃次数调整跳跃速度
          this.velocityY = this.jumpVelocity * (1 + (this.jumpCount - 1) * 0.2);
          // 播放跳跃音效
        //   MUSIC.jumpMusic.pause();
          MUSIC.playJumpMusic();
      }
    }

    updatePosition() {
        if (this.jumping) {
            this.y += this.velocityY;
            this.velocityY += this.gravity;
            if (this.y >= 0) {
                this.y = 0;
                this.jumping = false;
                this.jumpCount = 0;
            }
        }
    }
}