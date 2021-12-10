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
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const constants_1 = require("../constants");
const retmode = `&retmode=${constants_1.retMode}`;
function getRequest(entryPoint, args) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${constants_1.baseUrl}${entryPoint}${args}${retmode}`;
        try {
            const res = yield (0, cross_fetch_1.default)(url);
            if (res.status >= 400) {
                throw new Error('Bad response from server');
            }
            const datas = yield res.json();
            return datas;
        }
        catch (err) {
            return err;
        }
    });
}
exports.default = getRequest;
