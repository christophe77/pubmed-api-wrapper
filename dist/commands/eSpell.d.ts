import { EspellResult } from '../types/Espell';
import { RetMode } from '../types/PubmedApi';
declare const eSpell: (retMode: RetMode, apiKey: string) => {
    search: (dbName: string, term: string) => Promise<EspellResult | unknown>;
};
export default eSpell;
