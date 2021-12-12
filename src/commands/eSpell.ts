import { entryPoints } from '../constants';
import getRequest from '../http';
import { RetMode } from '../types/PubmedApi';
// @ts-ignore
import { convertXML } from 'simple-xml-to-json';

/* 
  eSpell only works with xml retmode
  TODO : make my own XML to JSON converter script 
*/
const eSpell = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (dbName: string, term: string): Promise<string> => {
      const datas = await getRequest(
        entryPoints.espell,
        `retmode=xml${apiKey}&db=${dbName}&term=${term}`,
      );
      if (retMode === 'json') {
        return JSON.stringify(convertXML(datas), null, 4);
      }
      return datas;
    },
  };
};

export default eSpell;
