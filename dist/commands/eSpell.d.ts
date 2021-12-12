import { RetMode } from '../types/pubmedApi';
declare const eSpell: (retMode: RetMode, apiKey: string) => {
    search: (dbName: string, term: string) => Promise<string>;
};
export default eSpell;
