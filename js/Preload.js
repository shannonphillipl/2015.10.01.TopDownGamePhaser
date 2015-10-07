var TopDownGame = TopDownGame || {};

//Loading the game assets
TopDownGame.Preload = function(){};

TopDownGame.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.tilemap('world_map', 'assets/tilemaps/world_map.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tileset', 'assets/images/tileset.png');
    this.load.spritesheet('player', 'assets/images/player.png', 32, 32);
    this.load.spritesheet('zeldaBullet', 'assets/images/zeldaBullet.png', 32, 32);
    this.load.spritesheet('goonDown', 'assets/images/goonDown.png', 32, 32);
    this.load.spritesheet('chicken', 'assets/images/chicken.png', 32, 32);
    this.game.load.spritesheet('kaboom', 'assets/images/explosion.png', 64, 64);
    this.load.spritesheet('goonUp', 'assets/images/goonUp.png', 32, 32);
  },
  create: function() {
    this.state.start('Game');
  }
};
