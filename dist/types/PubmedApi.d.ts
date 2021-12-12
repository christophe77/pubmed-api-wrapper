import { EinfoResult } from './EInfo';
import { EsearchOptions, EsearchResult } from './Esearch';
export interface IPubmedApi {
    retMode: RetMode;
    apiKey: ApiKey;
    eInfo: {
        getDbList: () => Promise<EinfoResult>;
        getDbInfo: (dbName: string) => Promise<EinfoResult>;
    };
    eSearch: {
        search: (options: EsearchOptions) => Promise<EsearchResult>;
    };
}
export declare type RetMode = 'json' | 'xml';
export declare type ApiKey = string;
