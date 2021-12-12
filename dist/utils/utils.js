"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toJson = void 0;
const xml2js_1 = require("xml2js");
// Convert string/XML to JSON
function toJson(xml) {
    let jsonResult = '';
    (0, xml2js_1.parseString)(xml, { explicitArray: false }, (error, result) => {
        if (error) {
            throw new Error(error.toString());
        }
        jsonResult = result;
    });
    return jsonResult;
}
exports.toJson = toJson;
