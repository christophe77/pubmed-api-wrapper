import { EsearchOptions } from '../types/Esearch';
import { RetMode } from '../types/PubmedApi';
declare const eSearch: (retMode: RetMode, apiKey: string) => {
    search: (dbName: string, term: string, options: EsearchOptions) => Promise<string>;
};
export default eSearch;
