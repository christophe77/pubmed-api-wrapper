declare type Translation = {
    term: string;
    field: string;
    count: string;
    explode: string;
};
export declare type EsearchOptions = {
    dbName: string;
    term: string;
    minDate?: string;
    maxDate?: string;
    retStart?: string;
    retMax?: string;
    retType?: string;
    dateType?: string;
    relDate?: string;
};
export declare type EsearchResult = {
    count: string;
    retmax: string;
    retstart: string;
    querykey: string;
    webenv: string;
    idlist: string[];
    translationset: string[];
    translationstack: Translation[];
    querytranslation: string;
};
export {};
