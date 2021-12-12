import { parseString } from 'xml2js';

// Convert string/XML to JSON
export function toJson(xml: string): string {
  let jsonResult = '';
  parseString(xml, { explicitArray: false }, (error, result) => {
    if (error) {
      throw new Error(error.toString());
    }
    jsonResult = result;
  });
  return jsonResult;
}
