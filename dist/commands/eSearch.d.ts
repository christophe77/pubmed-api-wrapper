import { EsearchResult, EsearchOptions } from '../types/Esearch';
import { RetMode } from '../types/PubmedApi';
declare const eSearch: (retMode: RetMode, apiKey: string) => {
    search: (options: EsearchOptions) => Promise<EsearchResult>;
};
export default eSearch;
