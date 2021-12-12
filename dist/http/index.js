"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const constants_1 = require("../constants");
function getRequest(entryPoint, args) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: constants_1.hostname,
                path: `${constants_1.baseUrl}${entryPoint}${args}`,
                port: 443,
                method: 'GET',
            };
            const body = [];
            const req = https_1.default.request(options, res => {
                res.on('data', chunk => body.push(chunk));
                res.on('end', () => {
                    const data = Buffer.concat(body).toString();
                    resolve(data);
                });
            });
            req.on('error', e => {
                reject(e);
            });
            req.end();
        });
    });
}
exports.default = getRequest;
