import { EntrezDb } from '../types/Entrez';
declare const eFetch: {
    getDb: (dbName: EntrezDb) => Promise<any>;
};
export default eFetch;
