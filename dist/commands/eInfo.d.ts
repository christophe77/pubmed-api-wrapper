import { EntrezDb } from '../types/Entrez';
declare const eInfo: {
    getDb: (dbName: EntrezDb) => Promise<string>;
};
export default eInfo;
