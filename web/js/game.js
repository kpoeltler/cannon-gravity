(() => {
	'use strict';

	const config = {
		type: Phaser.CANVAS,
		width: window.innerWidth,
		height: window.innerHeight,
		scene: [MainMenu]
	};

	const game = new Phaser.Game(config);

})();
