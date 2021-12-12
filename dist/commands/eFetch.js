"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
const http_1 = __importDefault(require("../http"));
const eFetch = (retMode, apiKey) => {
    return {
        getSearch: (dbName, uids, retType) => {
            return (0, http_1.default)(constants_1.entryPoints.efetch, `db=${dbName}&id=${uids}&rettype=${retType}&retmode=${retMode}${apiKey}`);
        },
    };
};
exports.default = eFetch;
