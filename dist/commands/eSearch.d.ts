import { EntrezDb } from '../types/Entrez';
declare const eSearch: {
    getSearch: (dbName: EntrezDb, query: string) => Promise<string>;
};
export default eSearch;
