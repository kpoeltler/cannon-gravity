class MainMenu extends Phaser.Scene{}

//Load assets
MainMenu.preload = function() {
	//load background image
	this.load.image("background", "web/assets/space.png");

};

MainMenu.create = function() {
	// create background sprite
	let spaceBackground = this.add.sprite (0, 0, "background");

	//change the origin to the top left corner, use the method setOrgin(0,0)
	spaceBackground.setOrigin(0, 0);

	//change the background scale
	spaceBackground.setScale(1);

	//center the background sprite
	spaceBackground.setPosition(640/2, 320/2);

	console.log('spaceBackground testing center position', spaceBackground);
};