class MainMenu extends Phaser.Scene {
	constructor() {
		super({key: 'MainMenu'});
	}

	preload() {
		this.load.image('background-space', 'assets/background-space.jpg');
		this.load.image('text-gravity-cannon', 'assets/text-gravity-cannon.png');

		worlds.forEach((world) => {
			this.load.image(world.id, world.image);
		});
	}

	create() {
		const canvas = {
			width: this.sys.canvas.width,
			height: this.sys.canvas.height,
			centerX: this.sys.canvas.width / 2,
			centerY: this.sys.canvas.height / 2
		};

		this.placeBackgroundImage(canvas);
		const titleHeight = this.placeTitleImage(canvas, {top: 30, bottom: 40, sides: 200});
		const gridCells = this.buildGrid(canvas, titleHeight, worlds.length, 3);

		for (let i = 0; i < gridCells.length; i++) {
			this.addWorld(worlds[i], gridCells[i]);
		}
	}

	placeBackgroundImage(canvas) {
		this.bgImage = this.add.image(canvas.centerX, canvas.centerY, 'background-space');
		this.bgImage.setScale(
			Math.max(
				canvas.width / this.bgImage.width,
				canvas.height / this.bgImage.height
			)
		);
	}

	placeTitleImage(canvas, padding) {
		this.titleImage = this.add.image(0, 0, 'text-gravity-cannon');
		const maxHeight = canvas.height * .08;
		let scale = 1;
		let height = this.titleImage.height;
		if (this.titleImage.height > maxHeight) {
			scale = maxHeight / this.titleImage.height;
			height = height * scale;
		}

		this.titleImage
			.setPosition(canvas.centerX, height / 2 + padding.top)
			.setScale(scale);

		return height + padding.top + padding.bottom;
	}

	buildGrid(canvas, startY, slots, perRow) {
		const numRows = Math.ceil(slots / perRow);
		const gridHeight = canvas.height - startY;
		const cellHeight = gridHeight / numRows;
		const cellWidth = canvas.width / perRow;
		const cells = [];

		let x = 0;
		let y = startY;
		for (let i = 1; i <= slots; i++) {
			cells.push({
				x, y,
				width: cellWidth,
				height: cellHeight,
				centerX: x + (cellWidth / 2),
				centerY: y + (cellHeight / 2),
			});

			x += cellWidth;

			if (i % perRow === 0) {
				x = 0;
				y += cellHeight;
			}
		}

		return cells;
	}

	addWorld(world, cell) {
		const image = this.add.image(cell.centerX, cell.centerY, world.id);
		let scale = 1;
		let padding = 40;

		if (image.width > cell.width || image.height > cell.height) {
			scale = Math.min(
				(cell.width - (padding * 2)) / image.width,
				(cell.height - (padding * 2)) / image.height
			);
		}

		image
			.setScale(scale)
			.setInteractive({useHandCursor: true})
			.on('pointerover', () => {
				image.setScale(scale + 0.02);
			}).on('pointerout', () => {
				image.setScale(scale);
			}).on('pointerup', () => {
				alert(`You clicked ${world.name}!`);
			});
	}
}
