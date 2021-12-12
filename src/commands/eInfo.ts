import { entryPoints } from '../constants';
import getRequest from '../http';
import { EinfoResult } from '../types/EInfo';
import { RetMode } from '../types/PubmedApi';

const eInfo = (retMode: RetMode, apiKey: string) => {
  return {
    getDbList: async (): Promise<EinfoResult> => {
      const datas = await getRequest(
        entryPoints.einfo,
        `retmode=${retMode}${apiKey}`,
      );
      const { einforesult } = datas;
      return einforesult;
    },
    getDbInfo: async (dbName: string): Promise<EinfoResult> => {
      const datas = await getRequest(
        entryPoints.einfo,
        `db=${dbName}&retmode=${retMode}${apiKey}`,
      );
      const { einforesult } = datas;
      return einforesult;
    },
  };
};

export default eInfo;
