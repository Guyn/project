#!/usr/bin/env node
"use strict";

import path from "path";
import sao from "sao";

const generator = path.resolve(__dirname, "./");
const outDir = path.resolve(process.argv[2] || ".");
sao({ generator, outDir })
	.run()
	.catch((err: string) => {
		console.trace(err);
		process.exit(1);
	});
