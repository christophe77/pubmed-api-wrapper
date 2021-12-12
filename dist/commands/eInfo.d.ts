import { EinfoResult } from '../types/EInfo';
import { RetMode } from '../types/PubmedApi';
declare const eInfo: (retMode: RetMode, apiKey: string) => {
    getDbList: () => Promise<EinfoResult>;
    getDbInfo: (dbName: string) => Promise<EinfoResult>;
};
export default eInfo;
