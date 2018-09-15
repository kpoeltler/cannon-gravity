class MainMenu extends Phaser.Scene {
	constructor() {
		super({key: 'MainMenu'});
	}

	preload() {
		this.load.image('background', 'assets/background-space.png');
	}

	create() {
		this.bgImage = this.add.image(0, 0, 'background');
		this.bgImage.setOrigin(0, 0);

		// TODO: Maintain background image aspect ratio
		this.bgImage.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);
	}
}
