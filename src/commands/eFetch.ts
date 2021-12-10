// efetch.fcgi?db=database&id=uid1,uid2,uid3&rettype=report_type&retmode=data_mode
import { entryPoints } from '../constants';
import getRequest from '../http';
import { EntrezDb } from '../types/Entrez';

const eFetch = {
  getDb: (dbName: EntrezDb) => {
    return getRequest(entryPoints.efetch, `db=${dbName}&WebEnv=webenv&query_key=gay`);
  },
};

export default eFetch;
