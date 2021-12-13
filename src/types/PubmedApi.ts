import { ESearchOptions, ESummaryOptions } from './searchOptions';

export interface IPubmedApi {
  retMode: RetMode;
  apiKey: ApiKey;
  eInfo: {
    getDbList: () => Promise<string>;
    getDbInfo: (dbName: string) => Promise<string>;
  };
  eSearch: {
    search: (
      dbName: string,
      term: string,
      options: ESearchOptions,
    ) => Promise<string>;
  };
  eSummary: {
    search: (
      dbName: string,
      id: string,
      options: ESummaryOptions,
    ) => Promise<string>;
  };
  eSpell: {
    search: (dbName: string, term: string) => Promise<string>;
  };
}
export type RetMode = 'json' | 'xml';
export type ApiKey = string;
