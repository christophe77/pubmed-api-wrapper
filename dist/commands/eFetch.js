"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// efetch.fcgi?db=database&id=uid1,uid2,uid3&rettype=report_type&retmode=data_mode
const constants_1 = require("../constants");
const http_1 = __importDefault(require("../http"));
const eFetch = {
    getDb: (dbName) => {
        return (0, http_1.default)(constants_1.entryPoints.efetch, `db=${dbName}&WebEnv=webenv&query_key=gay`);
    },
};
exports.default = eFetch;
