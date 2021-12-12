import { entryPoints } from '../constants';
import getRequest from '../http';
import { RetMode } from '../types/PubmedApi';

const eFetch = (retMode: RetMode, apiKey: string) => {
  return {
    getSearch: (dbName: string, uids: string, retType: string) => {
      return getRequest(
        entryPoints.efetch,
        `db=${dbName}&id=${uids}&rettype=${retType}&retmode=${retMode}${apiKey}`,
      );
    },
  };
};

export default eFetch;