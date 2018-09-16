class MainMenu extends Phaser.Scene {
	constructor() {
		super({key: 'MainMenu'});
	}

	preload() {
		this.load.image('background-space', 'assets/background-space.jpg');
		this.load.image('text-gravity-cannon', 'assets/text-gravity-cannon.png');
		this.load.image('world-earth', 'assets/world-earth.png');
		this.load.image('world-io', 'assets/world-io.png');
		this.load.image('world-mars', 'assets/world-mars.png');
		this.load.image('world-moon', 'assets/world-moon.png');
		this.load.image('world-pluto', 'assets/world-pluto.png');
		this.load.image('world-venus', 'assets/world-venus.png');
	}

	create() {
		this.bgImage = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'background-space');
		this.bgAspectRatio = this.bgImage.width / this.bgImage.height;
		this.gameAspectRatio = this.sys.canvas.width / this.sys.canvas.height;
		this.gameScale = this.gameAspectRatio > this.bgAspectRatio ?
			this.sys.canvas.width / this.bgImage.width :
			this.sys.canvas.height / this.bgImage.height

		this.bgImage.setScale(this.gameScale);

		this.titleImage = this.add.image(this.sys.canvas.width / 2, 150 * this.gameScale, 'text-gravity-cannon');
		this.titleImage.setScale(this.gameScale);

		this.worlds = {};
		this.addWorld('earth', this.sys.canvas.width / 2 - 900 * this.gameScale, 600 * this.gameScale);
		this.addWorld('moon', this.sys.canvas.width / 2, 600 * this.gameScale);
		this.addWorld('mars', this.sys.canvas.width / 2 + 900 * this.gameScale, 600 * this.gameScale);
		this.addWorld('pluto', this.sys.canvas.width / 2 - 900 * this.gameScale, 1200 * this.gameScale);
		this.addWorld('io', this.sys.canvas.width / 2, 1200 * this.gameScale);
		this.addWorld('venus', this.sys.canvas.width / 2 + 900 * this.gameScale, 1200 * this.gameScale);

		window.mainMenu = this;
	}

	addWorld(worldName, x, y) {
		const world = this.add.image(x, y, `world-${worldName}`)
			.setScale(this.gameScale)
			.setInteractive({useHandCursor: true})
			.on('pointerover', () => {
				world.setScale(this.gameScale + 0.02);
			}).on('pointerout', () => {
				world.setScale(this.gameScale);
			}).on('pointerup', () => {
				alert(`You clicked ${worldName}!`);
			});

		this.worlds[worldName] = world;
	}
}
