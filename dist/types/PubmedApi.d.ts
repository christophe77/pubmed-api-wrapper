import { ESearchOptions, ESummaryOptions } from './searchOptions';
export interface IPubmedApi {
    retMode: RetMode;
    apiKey: ApiKey;
    eInfo: {
        getDbList: () => Promise<string>;
        getDbInfo: (db: string) => Promise<string>;
    };
    eSearch: {
        search: (db: string, term: string, options: ESearchOptions) => Promise<string>;
    };
    eCitMatch: {
        match: (db: string, bData: string, email?: string | undefined) => Promise<string>;
    };
    eSummary: {
        search: (db: string, id: string, options: ESummaryOptions) => Promise<string>;
    };
    eSpell: {
        search: (db: string, term: string) => Promise<string>;
    };
}
export declare type RetMode = 'json' | 'xml';
export declare type ApiKey = string;
