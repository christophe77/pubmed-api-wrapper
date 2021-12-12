import { EsearchOptions } from './Esearch';

export interface IPubmedApi {
  retMode: RetMode;
  apiKey: ApiKey;
  eInfo: {
    getDbList: () => Promise<string>;
    getDbInfo: (dbName: string) => Promise<string>;
  };
  eSearch: {
    search: (options: EsearchOptions) => Promise<string>;
  };
  eSpell: {
    search: (dbName: string, term: string) => Promise<string>;
  };
}
export type RetMode = 'json' | 'xml';
export type ApiKey = string;
