"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const eEntrez = {
    getDbList: () => {
        return JSON.stringify(constants_1.eEntrezDb);
    },
};
exports.default = eEntrez;
