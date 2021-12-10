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
const eEntrez_1 = __importDefault(require("./commands/eEntrez"));
const eFetch_1 = __importDefault(require("./commands/eFetch"));
const eSearch_1 = __importDefault(require("./commands/eSearch"));
const eInfo_1 = __importDefault(require("./commands/eInfo"));
function getQuery() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield eSearch_1.default.getSearch('pubmed', 'zanzibar');
        console.log(results);
    });
}
getQuery();
exports.default = {
    eEntrez: eEntrez_1.default,
    eFetch: eFetch_1.default,
    eInfo: eInfo_1.default,
};
