import { entryPoints } from '../constants';
import getRequest from '../http';
import { RetMode } from '../types/PubmedApi';

const eSpell = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (dbName: string, term: string): Promise<string> => {
      const datas = await getRequest(
        entryPoints.espell,
        `retmode=${retMode}${apiKey}&db=${dbName}&term=${term}`,
      );
      return datas;
    },
  };
};

export default eSpell;
