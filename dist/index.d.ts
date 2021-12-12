import { ApiKey, IPubmedApi, RetMode } from './types/PubmedApi';
export declare class PubmedApi implements IPubmedApi {
    retMode: RetMode;
    apiKey: string;
    eInfo: {
        getDbList: () => Promise<string>;
        getDbInfo: (dbName: string) => Promise<string>;
    };
    eSearch: {
        search: (options: import("./types/Esearch").EsearchOptions) => Promise<unknown>;
    };
    eSpell: {
        search: (dbName: string, term: string) => Promise<unknown>;
    };
    constructor(retMode?: RetMode, apiKey?: ApiKey);
}
