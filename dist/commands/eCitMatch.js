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
/*
  eCitMatch only works with xml retmode
*/
const eCitMatch = (retMode, apiKey) => {
    // bdata = journal_title|year|volume|first_page|author_name|your_key|
    return {
        match: (db, bData, email) => __awaiter(void 0, void 0, void 0, function* () {
            const datas = yield (0, http_1.default)(constants_1.entryPoints.ecitmatch, `db=${db}&retmode=xml${apiKey}&bdata=${bData}${email && `&email=${email}`}`);
            const jsonDatas = JSON.stringify({
                eCitMatch: datas.replace(/\n/g, ''),
            });
            return retMode === 'json' ? jsonDatas : datas;
        }),
    };
};
exports.default = eCitMatch;
