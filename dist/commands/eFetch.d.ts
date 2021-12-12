import { RetMode } from '../types/PubmedApi';
declare const eFetch: (retMode: RetMode, apiKey: string) => {
    getSearch: (dbName: string, uids: string, retType: string) => Promise<any>;
};
export default eFetch;
