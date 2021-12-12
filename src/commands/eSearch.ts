import { entryPoints } from '../constants';
import getRequest from '../http';
import { EsearchResult, EsearchOptions } from '../types/Esearch';
import { RetMode } from '../types/PubmedApi';

const eSearch = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (options: EsearchOptions): Promise<EsearchResult> => {
      const { dbName, term } = options;
      const datas = await getRequest(
        entryPoints.esearch,
        `db=${dbName}&term=${term}&usehistory=y&retmode=${retMode}${apiKey}${optionalArgsBuilder(
          options,
        )}`,
      );
      const { esearchresult } = datas;
      return esearchresult;
    },
  };
};
const optionalArgsBuilder = (options: EsearchOptions): string => {
  const { minDate, maxDate, retStart, retMax, retType, dateType, relDate } =
    options;
  const qMinDate = minDate ? `&mindate=${minDate}` : '';
  const qMaxDate = maxDate ? `&maxdate=${maxDate}` : '';
  const qRetstart = retStart ? `&retstart=${retStart}` : '';
  const qRetmax = retMax ? `&retmax=${retMax}` : '';
  const qRetType = retType ? `&rettype=${retType}` : '';
  const qDateType = dateType ? `&datetype=${dateType}` : '';
  const qRelDate = relDate ? `&reldate=${relDate}` : '';
  return `${qMinDate}${qMaxDate}${qRetstart}${qRetmax}${qRetType}${qDateType}${qRelDate}`;
};

export default eSearch;
