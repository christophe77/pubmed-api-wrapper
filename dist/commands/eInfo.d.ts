import { RetMode } from '../types/pubmedApi';
declare const eInfo: (retMode: RetMode, apiKey: string) => {
    getDbList: () => Promise<string>;
    getDbInfo: (db: string) => Promise<string>;
};
export default eInfo;
