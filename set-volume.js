function run(argv) {
	const volume = parseInt(argv[0], 10);
	const app = Application.currentApplication();

	app.includeStandardAdditions = true;
	app.setVolume(null, {
		outputVolume: volume
	});
}

