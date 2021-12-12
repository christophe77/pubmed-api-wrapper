import { EinfoResult } from './EInfo';
import { EsearchOptions, EsearchResult } from './Esearch';

export interface IPubmedApi {
  retMode: RetMode;
  apiKey: ApiKey;
  eFetch: {
    getSearch: (
      dbName: string,
      uids: string,
      retType: string,
    ) => Promise<string>;
  };
  eInfo: {
    getDbList: () => Promise<EinfoResult>;
    getDbInfo: (dbName: string) => Promise<EinfoResult>;
  };
  eSearch: {
    search: (options: EsearchOptions) => Promise<EsearchResult>;
  };
}
export type RetMode = 'json' | 'xml';
export type ApiKey = string;
