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
const aaa = new PubmedApi('xml');
function search() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const results = yield aaa.eInfo.getDbList();
            console.log(results);
        }
        catch (error) {
            console.log(error);
        }
    });
}
search();
