import { entryPoints } from '../constants';
import getRequest from '../http';
import { EntrezDb } from '../types/Entrez';
import { DbInfos } from '../types/EInfos';

const eInfo = {
  getDb: async (dbName: EntrezDb): Promise<string> => {
    const datas = await getRequest(entryPoints.einfo, `db=${dbName}`);
    const dbinfo : DbInfos = datas.einforesult.dbinfo;
    return JSON.stringify(dbinfo);
  },
};

export default eInfo;
