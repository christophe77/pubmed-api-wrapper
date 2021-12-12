import { ApiKey, IPubmedApi, RetMode } from './types/PubmedApi';
export declare class PubmedApi implements IPubmedApi {
    retMode: RetMode;
    apiKey: string;
    eInfo: {
        getDbList: () => Promise<string>;
        getDbInfo: (dbName: string) => Promise<string>;
    };
    eSearch: {
        search: (dbName: string, term: string, options: import("./types/Esearch").EsearchOptions) => Promise<string>;
    };
    eSpell: {
        search: (dbName: string, term: string) => Promise<string>;
    };
    constructor(retMode?: RetMode, apiKey?: ApiKey);
}
