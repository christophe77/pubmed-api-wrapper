import { EsearchOptions } from '../types/searchOptions';
import { RetMode } from '../types/pubmedApi';
declare const eSearch: (retMode: RetMode, apiKey: string) => {
    search: (dbName: string, term: string, options: EsearchOptions) => Promise<string>;
};
export default eSearch;
