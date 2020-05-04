#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const sao_1 = __importDefault(require("sao"));
const generator = path_1.default.resolve(__dirname, "./");
const outDir = path_1.default.resolve(process.argv[2] || ".");
sao_1.default({ generator, outDir })
    .run()
    .catch((err) => {
    console.trace(err);
    process.exit(1);
});
//# sourceMappingURL=cli.js.map