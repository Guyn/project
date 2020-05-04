import exec from "await-exec";

module.exports = {
	prompts() {
		return [
			{
				name: "project_name",
				message: "Project name",
				default: this.outFolder,
				filter: (val) => val.toLowerCase(),
				store: true,
			},
			{
				name: "project_description",
				message: "Project description",
				default: "My New Project",
				store: true,
			},
			{
				name: "project_author",
				message: "Author name",
				default: this.gitUser.username || this.gitUser.name,
				store: true,
			},
			{
				name: "project_sass",
				message: "Choose a Sass Version to use",
				type: "list",
				choices: [
					{ name: "Sass", value: "sass" },
					{ name: "Node Sass", value: "node-sass" },
				],
				default: "sass",
				store: true,
			},
			{
				name: "project_options",
				message: "Which addons do you want to add?",
				type: "checkbox",
				choices: [
					{
						name: "Guyn Design System (alpha)",
						value: "guyn-ds",
						checked: false,
					},
					{ name: "Guyn Color", value: "guyn-color", checked: false },
				],
				store: true,
			},
		];
	},
	templateData() {
		const guynDs = this.answers.project_options.includes("guyn-ds");
		const guynColor = this.answers.project_options.includes("guyn-color");
		const nodeSass = this.answers.project_sass === "node-sass";
		const sass = this.answers.project_sass === "sass";
		return { guynDs, guynColor, nodeSass, sass };
	},
	actions: [
		{
			templateDir: "template",
			type: "add",
			files: "**",
		},
		{
			type: "move",
			patterns: {
				"_package.json": "package.json",
			},
		},
	],
	async completed() {
		this.gitInit();

		console.log();

		const loader = [];
		const timer = 250;
		let x = 0;

		const doLoader = () => {
			if (x < 40) {
				loader.push("▊");
				x++;
				process.stdout.write("\r" + this.chalk.blue(loader.join("")));
			} else {
				clearInterval(loadTimer);
			}
		};
		let loadTimer = (() => {
			return setInterval(() => {
				doLoader();
			}, timer);
		})();

		await exec(
			`(curl -s0 https://raw.githubusercontent.com/guyn/project/master/src/nuxt/setup.sh) | bash -s ${this.outFolder}`,
			(err: string, stdout: string) => {
				if (err) {
					console.log("Couldn't setup Nuxt files\n\n", err);
				}
				console.log("Created Guyn style Files", stdout);
			}
		);

		await exec(
			`(curl -s0 https://raw.githubusercontent.com/guyn/style/master/src/install/setup.sh) | bash -s ${this.outFolder}/assets/scss ${this.guyn}`,
			(err: string, stdout: string) => {
				if (err) {
					console.log("couldn't create all Guyn Style files\n\n", err);
				} else {
					console.log("Created Nuxt Files", stdout);
				}
			}
		);

		clearInterval(loadTimer);
		loadTimer = (() => {
			return setInterval(() => {
				doLoader();
			}, 10);
		})();

		// await this.npmInstall()
		setTimeout(() => {
			const guynIcon = [
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▛    ▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▙       ▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊    ▟▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊   ▟▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊    ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊      ▊▊▊▊▊      ▜▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊       ▊▊▊▊▊▊▊       ▜▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▛        ▊▊▊▊▊▊▊        ▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊         ▊▊▊▊▊▊▊        ▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▙        ▊▊▊▊▊▊▊        ▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▙      ▊▊▊▊▊▊▊      ▟▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▙     ▊▊▊▊▊     ▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊   ▊▊▊▊▊     ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▛   ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊        ▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊               ▜▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▙                   ▜▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊                ▜▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊     ▊▊▊▊▊▊▙          ▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▙      ▊▊▊▊▊▊▊▊▙        ▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊     ▊▊▊▊▊▊▊▊▊▊▙     ▟▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▙   ▜▊▊▊▊▊▊▊▊     ▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▙    ▟▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
				"▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊▊",
			];

			guynIcon.forEach((line, index) => {
				if (index < 1) console.log("\n" + this.chalk.blue(line));
				else console.log(this.chalk.blue(line));
			});

			console.log();
			console.log();
			console.log(
				this.chalk.bold(`   Done! Your `) +
					this.chalk.bold.green(`Nuxt `) +
					this.chalk.bold.pink(`Guyn`) +
					this.chalk.bold(` App is ready.\n`)
			);
			console.log();
			console.log(
				`   Go to your project - cd ${this.chalk.bold(
					this._answers.project_name
				)}`
			);
			console.log(
				`   Run ${this.chalk.bold(
					"'npm install && npm run dev'"
				)} to get started..`
			);
			console.log();
			console.log();
		}, 1000);
	},
};
