import { entryPoints } from '../constants';
import getRequest from '../http';
import { EsummaryOptions } from '../types/searchOptions';
import { RetMode } from '../types/pubmedApi';

const eSummary = (retMode: RetMode, apiKey: string) => {
  return {
    search: async (
      dbName: string,
      id: string,
      options: EsummaryOptions,
    ): Promise<string> => {
      const datas = await getRequest(
        entryPoints.esummary,
        `db=${dbName}&id=${id}&retmode=${retMode}${apiKey}${optionalArgsBuilder(
          options,
        )}`,
      );
      return datas;
    },
  };
};
const optionalArgsBuilder = (options: EsummaryOptions): string => {
  if (options) {
    const { retStart, retMax, version } = options;
    const qRetstart = retStart ? `&retstart=${retStart}` : '';
    const qRetmax = retMax ? `&retmax=${retMax}` : '';
    const qVersion = version ? `&version=${version}` : '';
    return `${qRetstart}${qRetmax}${qVersion}`;
  }
  return '';
};

export default eSummary;
