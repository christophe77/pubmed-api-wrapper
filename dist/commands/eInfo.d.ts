import { RetMode } from '../types/PubmedApi';
declare const eInfo: (retMode: RetMode, apiKey: string) => {
    getDbList: () => Promise<string>;
    getDbInfo: (dbName: string) => Promise<string>;
};
export default eInfo;
