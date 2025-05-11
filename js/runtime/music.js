class Music {
  constructor() {
    this.bgMusic = wx.createInnerAudioContext();
    this.bgMusic.src = 'audio/bg.mp3';
    this.bgMusic.volume = 0.5;

    this.jumpMusic = wx.createInnerAudioContext();
    this.jumpMusic.src = 'audio/jump.mp3';
    this.jumpMusic.volume = 1;

    this.gameOverMusic = wx.createInnerAudioContext();
    this.gameOverMusic.src = 'audio/gameover.mp3';
    this.gameOverMusic.volume = 1;

    this.itemPickUpMusic = wx.createInnerAudioContext();
    this.itemPickUpMusic.src = 'audio/item-pick-up.mp3';
    this.itemPickUpMusic.volume = 1;

    this.fallToGroundMusic = wx.createInnerAudioContext();
    this.fallToGroundMusic.src = 'audio/fall-to-ground.mp3';
    this.fallToGroundMusic.volume = 1;
  }

  playBackgroundMusic() {
    this.bgMusic.currentTime = 0;
    this.bgMusic.play();
  }

  stopBackgroundMusic() {
    this.bgMusic.stop();
  }

  playJumpMusic() {
    this.jumpMusic.currentTime = 0;
    this.jumpMusic.play();
  }

  stopJumpMusic() {
    this.jumpMusic.stop();
  }

  playGameOverMusic() {
    this.gameOverMusic.currentTime = 0;
    this.gameOverMusic.play();
  }

  stopGameOverMusic() {
    this.gameOverMusic.stop();
  }

  playItemPickUpMusic() {
    this.itemPickUpMusic.currentTime = 0;
    this.itemPickUpMusic.play();
  }

  stopItemPickUpMusic() {
    this.itemPickUpMusic.stop();
  }

  playFallToGroundMusic() {
    this.fallToGroundMusic.currentTime = 0;
    this.fallToGroundMusic.play();
  }

  stopFallToGroundMusic() {
    this.fallToGroundMusic.stop();
  }
}
const MUSIC = new Music();
export default MUSIC;
