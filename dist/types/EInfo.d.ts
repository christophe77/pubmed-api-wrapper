declare type Link = {
    name: string;
    menu: string;
    description: string;
    dbto: string;
};
declare type Field = {
    name: string;
    fullname: string;
    description: string;
    termcount: string;
    isdate: string;
    isnumerical: string;
    singletoken: string;
    hierarchy: string;
    ishidden: string;
};
declare type DbInfo = {
    db: string;
    menuname: string;
    description: string;
    dbbuild: string;
    count: string;
    lastupdate: string;
    fieldlist: Field[];
    linklist: Link[];
};
export declare type EinfoResult = {
    dbinfo: DbInfo;
    dblist: string[];
};
export {};
