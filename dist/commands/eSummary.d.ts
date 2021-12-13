import { ESummaryOptions } from '../types/searchOptions';
import { RetMode } from '../types/pubmedApi';
declare const eSummary: (retMode: RetMode, apiKey: string) => {
    search: (db: string, id: string, options: ESummaryOptions) => Promise<string>;
};
export default eSummary;
