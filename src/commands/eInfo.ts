import { entryPoints } from '../constants';
import getRequest from '../http';
import { RetMode } from '../types/pubmedApi';

const eInfo = (retMode: RetMode, apiKey: string) => {
  return {
    getDbList: async (): Promise<string> => {
      const datas = await getRequest(
        entryPoints.einfo,
        `retmode=${retMode}${apiKey}`,
      );
      return datas;
    },
    getDbInfo: async (db: string): Promise<string> => {
      const datas = await getRequest(
        entryPoints.einfo,
        `db=${db}&retmode=${retMode}${apiKey}`,
      );
      return datas;
    },
  };
};

export default eInfo;
