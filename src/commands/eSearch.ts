import { entryPoints } from '../constants';
import getRequest from '../http';
import { ESearchOptions } from '../types/searchOptions';
import { RetMode } from '../types/pubmedApi';

const eSearch = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (
      dbName: string,
      term: string,
      options: ESearchOptions,
    ): Promise<string> => {
      const datas = await getRequest(
        entryPoints.esearch,
        `db=${dbName}&term=${term}&retmode=${retMode}${apiKey}${optionalArgsBuilder(
          options,
        )}`,
      );
      return datas;
    },
  };
};
const optionalArgsBuilder = (options: ESearchOptions): string => {
  if (options) {
    const { minDate, maxDate, retStart, retMax, retType, dateType, relDate, useHistory } =
      options;
    const qMinDate = minDate ? `&mindate=${minDate}` : '';
    const qMaxDate = maxDate ? `&maxdate=${maxDate}` : '';
    const qRetstart = retStart ? `&retstart=${retStart}` : '';
    const qRetmax = retMax ? `&retmax=${retMax}` : '';
    const qRetType = retType ? `&rettype=${retType}` : '';
    const qDateType = dateType ? `&datetype=${dateType}` : '';
    const qRelDate = relDate ? `&reldate=${relDate}` : '';
    const qUseHistory = useHistory ? `&usehistory=y` : '';
    return `${qMinDate}${qMaxDate}${qRetstart}${qRetmax}${qRetType}${qDateType}${qRelDate}${qUseHistory}`;
  }
  return '';
};

export default eSearch;
