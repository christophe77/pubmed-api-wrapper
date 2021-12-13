import { ESearchOptions } from '../types/searchOptions';
import { RetMode } from '../types/pubmedApi';
declare const eSearch: (retMode: RetMode, apiKey: string) => {
    search: (db: string, term: string, options: ESearchOptions) => Promise<string>;
};
export default eSearch;
