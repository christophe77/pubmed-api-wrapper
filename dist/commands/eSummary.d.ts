import { EsummaryOptions } from '../types/searchOptions';
import { RetMode } from '../types/pubmedApi';
declare const eSummary: (retMode: RetMode, apiKey: string) => {
    search: (dbName: string, id: string, options: EsummaryOptions) => Promise<string>;
};
export default eSummary;
