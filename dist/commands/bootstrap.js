"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander = __importStar(require("commander"));
const package_json_1 = __importDefault(require("../package.json"));
const actions_1 = require("../lib/actions");
const constants_1 = require("../lib/constants");
const { Command, Option } = commander;
const program = new Command();
const bootstrap = () => {
    program
        .name('watchword')
        .description('Command Line Password Generator in TypeScript')
        .version(package_json_1.default.version);
    program
        .addOption(new Option('-l, --length <value>', 'set the password length').default(constants_1.recommendedValues.length.default))
        .addOption(new Option('-n, --numbers <value>', 'set the minimum amount of numbers in the password').default(constants_1.recommendedValues.numbers.default))
        .addOption(new Option('-s, --special <value>', 'set the minimum amount of special characters in the password').default(constants_1.recommendedValues.specialCharacters.default))
        .action(() => {
        const options = program.opts();
        const passwordParams = {
            length: options.length,
            minNumbers: options.numbers,
            minSpecialCharacters: options.special,
        };
        (0, actions_1.getPasswordWithValidation)(passwordParams);
    });
    program.parse(process.argv);
};
exports.default = bootstrap;
