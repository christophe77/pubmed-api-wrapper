import { entryPoints } from '../constants';
import getRequest from '../http';
import { EsearchResult, EsearchOptions } from '../types/Esearch';
import { RetMode } from '../types/PubmedApi';

const eSearch = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (options: EsearchOptions): Promise<EsearchResult> => {
      const { dbName, query } = options;
      const datas = await getRequest(
        entryPoints.esearch,
        `db=${dbName}&term=${query}&usehistory=y&retmode=${retMode}${apiKey}${optionalArgsBuilder(
          options,
        )}`,
      );
      const { esearchresult } = datas;
      return esearchresult;
    },
  };
};
const optionalArgsBuilder = (options: EsearchOptions): string => {
  const { minDate, maxDate } = options;
  const qMinDate = minDate ? `&mindate=${minDate}` : '';
  const qMaxDate = maxDate ? `&maxdate=${maxDate}` : '';
  return `${qMinDate}${qMaxDate}`;
};

export default eSearch;
