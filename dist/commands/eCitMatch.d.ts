import { RetMode } from '../types/pubmedApi';
declare const eCitMatch: (retMode: RetMode, apiKey: string) => {
    match: (db: string, bData: string, email: string | undefined) => Promise<string>;
};
export default eCitMatch;
