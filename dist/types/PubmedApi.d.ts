import { EsearchOptions, EsummaryOptions } from './searchOptions';
export interface IPubmedApi {
    retMode: RetMode;
    apiKey: ApiKey;
    eInfo: {
        getDbList: () => Promise<string>;
        getDbInfo: (dbName: string) => Promise<string>;
    };
    eSearch: {
        search: (dbName: string, term: string, options: EsearchOptions) => Promise<string>;
    };
    eSummary: {
        search: (dbName: string, id: string, options: EsummaryOptions) => Promise<string>;
    };
    eSpell: {
        search: (dbName: string, term: string) => Promise<string>;
    };
}
export declare type RetMode = 'json' | 'xml';
export declare type ApiKey = string;
