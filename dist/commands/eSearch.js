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
const constants_1 = require("../constants");
const http_1 = __importDefault(require("../http"));
const eSearch = (retMode, apiKey) => {
    return {
        search: (options) => __awaiter(void 0, void 0, void 0, function* () {
            const { dbName, term } = options;
            const datas = yield (0, http_1.default)(constants_1.entryPoints.esearch, `db=${dbName}&term=${term}&usehistory=y&retmode=${retMode}${apiKey}${optionalArgsBuilder(options)}`);
            const { esearchresult } = datas;
            return esearchresult;
        }),
    };
};
const optionalArgsBuilder = (options) => {
    const { minDate, maxDate, retStart, retMax, retType, dateType, relDate } = options;
    const qMinDate = minDate ? `&mindate=${minDate}` : '';
    const qMaxDate = maxDate ? `&maxdate=${maxDate}` : '';
    const qRetstart = retStart ? `&retstart=${retStart}` : '';
    const qRetmax = retMax ? `&retmax=${retMax}` : '';
    const qRetType = retType ? `&rettype=${retType}` : '';
    const qDateType = dateType ? `&datetype=${dateType}` : '';
    const qRelDate = relDate ? `&reldate=${relDate}` : '';
    return `${qMinDate}${qMaxDate}${qRetstart}${qRetmax}${qRetType}${qDateType}${qRelDate}`;
};
exports.default = eSearch;
