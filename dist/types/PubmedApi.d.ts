import { EinfoResult } from './Einfo';
import { EspellResult } from './Espell';
import { EsearchOptions, EsearchResult } from './Esearch';
export interface IPubmedApi {
    retMode: RetMode;
    apiKey: ApiKey;
    eInfo: {
        getDbList: () => Promise<EinfoResult | unknown>;
        getDbInfo: (dbName: string) => Promise<EinfoResult | unknown>;
    };
    eSearch: {
        search: (options: EsearchOptions) => Promise<EsearchResult | unknown>;
    };
    eSpell: {
        search: (dbName: string, term: string) => Promise<EspellResult | unknown>;
    };
}
export declare type RetMode = 'json' | 'xml';
export declare type ApiKey = string;
