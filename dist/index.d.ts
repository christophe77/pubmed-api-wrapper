import { ApiKey, IPubmedApi, RetMode } from './types/PubmedApi';
export declare class PubmedApi implements IPubmedApi {
    retMode: RetMode;
    apiKey: string;
    eInfo: {
        getDbList: () => Promise<import("./types/EInfo").EinfoResult>;
        getDbInfo: (dbName: string) => Promise<import("./types/EInfo").EinfoResult>;
    };
    eSearch: {
        search: (options: import("./types/Esearch").EsearchOptions) => Promise<import("./types/Esearch").EsearchResult>;
    };
    constructor(retMode?: RetMode, apiKey?: ApiKey);
}
