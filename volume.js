function run(argv) {
	const param = ' ' + argv[0].toLowerCase();
	const items = Array(101).fill()
		.map((_, i) => ({
			title: 'Volume ' + i + '%',
			arg: i
		}))
		.filter(i => i.title.toLowerCase().includes(param));

	return JSON.stringify({
		items
	});
}

