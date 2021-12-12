import { entryPoints } from '../constants';
import getRequest from '../http';
import { RetMode } from '../types/pubmedApi';
import { toJson } from '../utils/utils';
/* 
  eSpell only works with xml retmode
  TODO : make my own XML to JSON converter script 
*/
const eSpell = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (dbName: string, term: string): Promise<string> => {
      const xmlDatas = await getRequest(
        entryPoints.espell,
        `retmode=xml${apiKey}&db=${dbName}&term=${term}`,
      );
      const jsonDatas = toJson(xmlDatas)
      return retMode === 'json' ? jsonDatas : xmlDatas;
    },
  };
};

export default eSpell;
