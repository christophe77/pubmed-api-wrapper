import { ApiKey, IPubmedApi, RetMode } from './types/pubmedApi';
export declare class PubmedApi implements IPubmedApi {
    retMode: RetMode;
    apiKey: string;
    eInfo: {
        getDbList: () => Promise<string>;
        getDbInfo: (dbName: string) => Promise<string>;
    };
    eSearch: {
        search: (dbName: string, term: string, options: import("./types/searchOptions").EsearchOptions) => Promise<string>;
    };
    eSpell: {
        search: (dbName: string, term: string) => Promise<string>;
    };
    eSummary: {
        search: (dbName: string, id: string, options: import("./types/searchOptions").EsummaryOptions) => Promise<string>;
    };
    constructor(retMode?: RetMode, apiKey?: ApiKey);
}
