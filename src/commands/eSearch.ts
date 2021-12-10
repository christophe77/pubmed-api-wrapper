import { entryPoints } from '../constants';
import getRequest from '../http';
import { EntrezDb } from '../types/Entrez';
import { DbInfos } from '../types/EInfos';

const eSearch = {
  getSearch: async (dbName: EntrezDb, query: string): Promise<string> => {
    const datas = await getRequest(
      entryPoints.einfo,
      `db=${dbName}&usehistory=y&term=${query}`,
    );
    const dbinfo : DbInfos = datas.einforesult.dbinfo;
    return JSON.stringify(dbinfo);
  },
};

export default eSearch;
