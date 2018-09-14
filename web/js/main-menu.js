class MainMenu extends Phaser.Scene {
	constructor() {
		super({key: 'MainMenu'});
	}

	preload() {
		this.load.image('background', 'assets/background-space.png');
	}

	create() {
		let spaceBackground = this.add.sprite(0, 0, 'background');
		spaceBackground.setOrigin(0, 0);
		spaceBackground.setScale(1);
		spaceBackground.setPosition(640 / 2, 320 / 2);

		console.log('spaceBackground testing center position', spaceBackground);
	};
}
