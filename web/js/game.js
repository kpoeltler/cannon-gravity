(() => {
	'use strict';

	const config = {
		type: Phaser.AUTO,
		width: window.innerWidth,
		height: window.innerHeight,
		scene: [MainMenu]
	};

	const game = new Phaser.Game(config);

})();
