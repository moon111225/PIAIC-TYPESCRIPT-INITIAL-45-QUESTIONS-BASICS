"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
let personname = "abid ali";
let titlecasename = (0, lodash_1.startCase)(personname);
console.log(`lowercase: ${personname.toLowerCase()}`);
console.log(`UPPERCASE: ${personname.toUpperCase()}`);
console.log(`TitleCase: ${titlecasename}`);
