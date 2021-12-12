type Translation = {
  term: string;
  field: string;
  count: string;
  explode: string;
};
export type EsearchOptions = {
  dbName: string;
  query: string;
  minDate?: string;
  maxDate?: string;
};
export type EsearchResult = {
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
