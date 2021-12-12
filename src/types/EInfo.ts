type Link = {
  name: string;
  menu: string;
  description: string;
  dbto: string;
};
type Field = {
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
type DbInfo = {
  dbname: string;
  menuname: string;
  description: string;
  dbbuild: string;
  count: string;
  lastupdate: string;
  fieldlist: Field[];
  linklist: Link[];
};

export type EinfoResult = {
  dbinfo: DbInfo;
  dblist: string[];
};