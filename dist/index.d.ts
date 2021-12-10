declare const _default: {
    eEntrez: {
        getDbList: () => string;
    };
    eFetch: {
        getDb: (dbName: import("./types/Entrez").EntrezDb) => Promise<any>;
    };
    eInfo: {
        getDb: (dbName: import("./types/Entrez").EntrezDb) => Promise<string>;
    };
};
export default _default;
