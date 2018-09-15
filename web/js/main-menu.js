class MainMenu extends Phaser.Scene {
	constructor() {
		super({key: 'MainMenu'});
	}

	preload() {
		this.load.image('background', 'assets/background-space.png');
		this.load.image('title', 'assets/text-gravity-cannon.png');
	}

	create() {
		this.bgImage = this.add.image(0, 0, 'background');
		this.bgImage.setOrigin(0, 0);
		// TODO: Maintain background image aspect ratio
		this.bgImage.setDisplaySize(this.sys.canvas.width, this.sys.canvas.height);


		this.titleImage = this.add.image(this.sys.canvas.width / 2, 100, 'title');
		// TODO: Set scale based on canvas size
		this.titleImage.setScale(0.4);
	}
}
