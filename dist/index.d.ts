import { ApiKey, IPubmedApi, RetMode } from './types/pubmedApi';
export declare class PubmedApi implements IPubmedApi {
    retMode: RetMode;
    apiKey: string;
    eInfo: {
        getDbList: () => Promise<string>;
        getDbInfo: (db: string) => Promise<string>;
    };
    eSearch: {
        search: (db: string, term: string, options: import("./types/searchOptions").ESearchOptions) => Promise<string>;
    };
    eSpell: {
        search: (db: string, term: string) => Promise<string>;
    };
    eSummary: {
        search: (db: string, id: string, options: import("./types/searchOptions").ESummaryOptions) => Promise<string>;
    };
    eCitMatch: {
        match: (db: string, bData: string, email: string | undefined) => Promise<string>;
    };
    constructor(retMode?: RetMode, apiKey?: ApiKey);
}
