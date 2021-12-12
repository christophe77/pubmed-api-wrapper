"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubmedApi = void 0;
const eSearch_1 = __importDefault(require("./commands/eSearch"));
const eInfo_1 = __importDefault(require("./commands/eInfo"));
const eSpell_1 = __importDefault(require("./commands/eSpell"));
class PubmedApi {
    constructor(retMode, apiKey) {
        this.retMode = retMode ? retMode : 'json';
        this.apiKey = apiKey && apiKey !== '' ? `&api_key=${apiKey}` : '';
        this.eInfo = (0, eInfo_1.default)(this.retMode, this.apiKey);
        this.eSearch = (0, eSearch_1.default)(this.retMode, this.apiKey);
        this.eSpell = (0, eSpell_1.default)(this.retMode, this.apiKey);
    }
}
exports.PubmedApi = PubmedApi;
